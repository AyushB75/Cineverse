import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text, ScrollView, FlatList, Image, TouchableOpacity,
  Dimensions, Animated, StyleSheet, PanResponder,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import movies from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';

const { width, height } = Dimensions.get('window');

const GOLD = '#C9A84C';
const BG = '#0A0A0A';
const CARD_W = width * 0.38;
const CARD_H = CARD_W * 1.5;
const HERO_H = height * 0.62;

const CATEGORIES = ['All', 'Action', 'Drama', 'Sci-Fi', 'Crime', 'Thriller', 'Comedy', 'History', 'Animation'];

const getRating = (r) => {
  if (r >= 9) return { color: '#00E676', label: 'Masterpiece' };
  if (r >= 8) return { color: GOLD, label: 'Excellent' };
  if (r >= 7) return { color: '#42A5F5', label: 'Great' };
  return { color: '#888', label: 'Good' };
};

// ─── Hero Banner ──────────────────────────────────────────────────────
function HeroBanner({ navigation }) {
  const featured = movies.slice(0, 6);
  const [current, setCurrent] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const autoPlayRef = useRef(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const goTo = (index) => {
    const next = (index + featured.length) % featured.length;
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
    setTimeout(() => setCurrent(next), 250);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % featured.length;
        Animated.sequence([
          Animated.timing(fadeAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
          Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
        ]).start();
        setTimeout(() => {}, 0);
        return next;
      });
    }, 4000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, []);

  // Swipe pan responder
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 10,
      onPanResponderRelease: (_, g) => {
        if (g.dx < -40) {
          // swipe left → next
          setCurrent(prev => {
            const next = (prev + 1) % featured.length;
            Animated.sequence([
              Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
              Animated.timing(fadeAnim, { toValue: 1, duration: 350, useNativeDriver: true }),
            ]).start();
            return next;
          });
          resetAutoPlay();
        } else if (g.dx > 40) {
          // swipe right → prev
          setCurrent(prev => {
            const next = (prev - 1 + featured.length) % featured.length;
            Animated.sequence([
              Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
              Animated.timing(fadeAnim, { toValue: 1, duration: 350, useNativeDriver: true }),
            ]).start();
            return next;
          });
          resetAutoPlay();
        }
      },
    })
  ).current;

  const movie = featured[current];
  const rInfo = getRating(movie.rating);

  // Average community rating calculation (issue 6)
  const communityRatings = movie.reviews?.map(r => r.rating) || [];
  const avgUserRating = communityRatings.length > 0
    ? (communityRatings.reduce((a, b) => a + b, 0) / communityRatings.length).toFixed(1)
    : null;

  return (
    <View style={{ height: HERO_H }} {...panResponder.panHandlers}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <Image
          source={{ uri: movie.backdrop || movie.poster }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(10,10,10,0.3)' }]} />
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(10,10,10,0.7)', top: HERO_H * 0.4 }]} />

        {/* Top bar */}
        <SafeAreaView edges={['top']}>
          <View style={styles.topBar}>
            <View>
              <Text style={styles.appTitle}>CINÉVERSE</Text>
              <Text style={styles.appSubtitle}>Your Movie Universe</Text>
            </View>
            <View style={styles.topBarRight}>
              <Text style={styles.goldStar}>★</Text>
            </View>
          </View>
        </SafeAreaView>

        {/* Hero content */}
        <View style={styles.heroContent}>
          <View style={styles.tagsRow}>
            {movie.tags?.slice(0, 2).map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.heroTitle} numberOfLines={2}>{movie.title}</Text>

          <View style={styles.metaRow}>
            <View style={[styles.ratingBadge, { backgroundColor: rInfo.color }]}>
              <Text style={styles.ratingBadgeText}>★ {movie.rating}</Text>
            </View>
            <Text style={styles.metaText}>{movie.year}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{movie.duration}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{movie.language}</Text>
          </View>

          <Text style={styles.heroDesc} numberOfLines={2}>{movie.description}</Text>

          <View style={styles.genreRow}>
            {movie.genre.slice(0, 3).map(g => (
              <View key={g} style={styles.genrePill}>
                <Text style={styles.genrePillText}>{g}</Text>
              </View>
            ))}
          </View>

          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.playBtn}
              onPress={() => navigation.navigate('Detail', { movie })}
              activeOpacity={0.85}
            >
              <Text style={styles.playBtnText}>▶  View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.favBtn, isFavorite(movie.id) && styles.favBtnActive]}
              onPress={() => toggleFavorite(movie)}
              activeOpacity={0.85}
            >
              <Text style={styles.favBtnText}>{isFavorite(movie.id) ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>

          {/* Nav arrows + dots */}
          <View style={styles.navRow}>
            <TouchableOpacity
              onPress={() => { goTo(current - 1); resetAutoPlay(); }}
              style={styles.arrowBtn}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.arrowText}>‹</Text>
            </TouchableOpacity>

            <View style={styles.dotsRow}>
              {featured.map((_, i) => (
                <TouchableOpacity key={i} onPress={() => { goTo(i); resetAutoPlay(); }}>
                  <View style={[styles.dot, i === current && styles.dotActive]} />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              onPress={() => { goTo(current + 1); resetAutoPlay(); }}
              style={styles.arrowBtn}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

// ─── Movie Card ───────────────────────────────────────────────────────
function MovieCard({ movie, navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { isFavorite, toggleFavorite } = useFavorites();
  const rInfo = getRating(movie.rating);

  const onPressIn = () => Animated.spring(scaleAnim, { toValue: 0.95, useNativeDriver: true }).start();
  const onPressOut = () => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Animated.View style={[styles.cardWrapper, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => navigation.navigate('Detail', { movie })}
      >
        <View style={styles.card}>
          <Image source={{ uri: movie.poster }} style={styles.cardImage} resizeMode="cover" />
          <View style={styles.cardOverlay} />
          <View style={[styles.cardRating, { backgroundColor: rInfo.color }]}>
            <Text style={styles.cardRatingText}>★ {movie.rating}</Text>
          </View>
          <TouchableOpacity
            style={styles.cardFav}
            onPress={() => toggleFavorite(movie)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={{ fontSize: 14 }}>{isFavorite(movie.id) ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <View style={styles.cardBottom}>
            <Text style={styles.cardTitle} numberOfLines={1}>{movie.title}</Text>
            <Text style={styles.cardYear}>{movie.year} · {movie.language}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

function SectionRow({ title, data, navigation, emoji }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionEmoji}>{emoji}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
        renderItem={({ item }) => <MovieCard movie={item} navigation={navigation} />}
      />
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const trending = [...movies].sort((a, b) => b.year - a.year).slice(0, 12);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 12);
  const indian = movies.filter(m => ['Hindi', 'Telugu', 'Tamil', 'Kannada'].includes(m.language)).slice(0, 12);
  const hollywood = movies.filter(m => m.language === 'English').slice(0, 12);
  const korean = movies.filter(m => m.language === 'Korean').slice(0, 8);

  const filtered = activeCategory === 'All'
    ? movies
    : movies.filter(m => m.genre.includes(activeCategory));

  // Fix: navigate to the Search tab correctly using nested navigator
  const navigateToSearch = (tag) => {
    navigation.navigate('Search', { filterTag: tag });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces>
        <HeroBanner navigation={navigation} />

        {/* Category filter */}
        <View style={styles.categorySection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
            {CATEGORIES.map(cat => (
              <TouchableOpacity
                key={cat}
                style={[styles.catPill, activeCategory === cat && styles.catPillActive]}
                onPress={() => setActiveCategory(cat)}
                activeOpacity={0.8}
              >
                <Text style={[styles.catText, activeCategory === cat && styles.catTextActive]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {activeCategory !== 'All' ? (
          <SectionRow title={`${activeCategory} Films`} emoji="🎭" data={filtered} navigation={navigation} />
        ) : (
          <>
            <SectionRow title="Trending Now" emoji="🔥" data={trending} navigation={navigation} />

            <View style={styles.statsBanner}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>100+</Text>
                <Text style={styles.statLabel}>Movies</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>50+</Text>
                <Text style={styles.statLabel}>Indian Films</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2026</Text>
                <Text style={styles.statLabel}>Latest</Text>
              </View>
            </View>

            <SectionRow title="Top Rated All Time" emoji="⭐" data={topRated} navigation={navigation} />
            <SectionRow title="Indian Cinema" emoji="🇮🇳" data={indian} navigation={navigation} />
            {korean.length > 0 && <SectionRow title="Korean Cinema" emoji="🇰🇷" data={korean} navigation={navigation} />}
            <SectionRow title="Hollywood Picks" emoji="🎬" data={hollywood} navigation={navigation} />
          </>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },

  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 8 },
  appTitle: { fontSize: 26, fontWeight: '900', color: GOLD, letterSpacing: 4 },
  appSubtitle: { fontSize: 10, color: '#666', letterSpacing: 2, marginTop: 1 },
  topBarRight: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1A1A1A', borderWidth: 1, borderColor: GOLD, alignItems: 'center', justifyContent: 'center' },
  goldStar: { color: GOLD, fontSize: 18 },

  heroContent: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20 },
  tagsRow: { flexDirection: 'row', gap: 8, marginBottom: 8 },
  tag: { backgroundColor: 'rgba(201,168,76,0.2)', borderWidth: 1, borderColor: GOLD, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  tagText: { color: GOLD, fontSize: 9, fontWeight: '700', letterSpacing: 1 },
  heroTitle: { fontSize: 32, fontWeight: '900', color: '#FFF', letterSpacing: 0.5, lineHeight: 36, marginBottom: 10 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  ratingBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  ratingBadgeText: { color: '#000', fontWeight: '800', fontSize: 12 },
  metaText: { color: '#CCC', fontSize: 13 },
  metaDot: { color: '#555', fontSize: 13 },
  heroDesc: { color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 20, marginBottom: 12 },
  genreRow: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  genrePill: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  genrePillText: { color: '#DDD', fontSize: 11, fontWeight: '600' },
  heroButtons: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  playBtn: { flex: 1, backgroundColor: GOLD, paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  playBtnText: { color: '#000', fontWeight: '800', fontSize: 15, letterSpacing: 0.5 },
  favBtn: { width: 52, height: 52, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  favBtnActive: { backgroundColor: 'rgba(255,50,50,0.2)', borderColor: '#FF4444' },
  favBtnText: { fontSize: 22 },

  navRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  arrowBtn: { padding: 4 },
  arrowText: { color: 'rgba(255,255,255,0.6)', fontSize: 28, fontWeight: '300', lineHeight: 32 },
  dotsRow: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.3)' },
  dotActive: { width: 20, backgroundColor: GOLD },

  categorySection: { paddingVertical: 16 },
  categoryScroll: { paddingHorizontal: 16, gap: 8 },
  catPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#1A1A1A', borderWidth: 1, borderColor: '#333' },
  catPillActive: { backgroundColor: GOLD, borderColor: GOLD },
  catText: { color: '#888', fontSize: 13, fontWeight: '600' },
  catTextActive: { color: '#000', fontWeight: '800' },

  section: { marginBottom: 28 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 14, gap: 8 },
  sectionEmoji: { fontSize: 20 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#FFF', letterSpacing: 0.3 },

  cardWrapper: { width: CARD_W },
  card: { width: CARD_W, height: CARD_H, borderRadius: 14, overflow: 'hidden', backgroundColor: '#1A1A1A' },
  cardImage: { width: '100%', height: '100%' },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  cardRating: { position: 'absolute', top: 8, left: 8, paddingHorizontal: 7, paddingVertical: 3, borderRadius: 6 },
  cardRatingText: { color: '#000', fontWeight: '800', fontSize: 11 },
  cardFav: { position: 'absolute', top: 8, right: 8 },
  cardBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 10, backgroundColor: 'rgba(0,0,0,0.75)' },
  cardTitle: { color: '#FFF', fontWeight: '700', fontSize: 13 },
  cardYear: { color: '#AAA', fontSize: 11, marginTop: 2 },

  statsBanner: { marginHorizontal: 20, marginVertical: 8, backgroundColor: '#111', borderRadius: 16, flexDirection: 'row', paddingVertical: 18, borderWidth: 1, borderColor: '#222' },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { color: GOLD, fontSize: 22, fontWeight: '900' },
  statLabel: { color: '#666', fontSize: 11, marginTop: 2, fontWeight: '600' },
  statDivider: { width: 1, backgroundColor: '#222' },
});