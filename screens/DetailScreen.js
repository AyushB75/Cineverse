import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
  Dimensions, Animated, StyleSheet, TextInput, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import movies from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

const { width, height } = Dimensions.get('window');
const GOLD = '#C9A84C';
const BG = '#0A0A0A';

// Format rating to 1 decimal place, no trailing 9s
const fmt = (n) => parseFloat(n.toFixed(1));

function RatingBar({ label, value, max = 10, color = GOLD }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, { toValue: value / max, duration: 900, delay: 200, useNativeDriver: false }).start();
  }, []);
  return (
    <View style={styles.ratingBarRow}>
      <Text style={styles.ratingBarLabel}>{label}</Text>
      <View style={styles.ratingBarTrack}>
        <Animated.View style={[styles.ratingBarFill, {
          width: anim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }),
          backgroundColor: color,
        }]} />
      </View>
      <Text style={[styles.ratingBarValue, { color }]}>{fmt(value)}</Text>
    </View>
  );
}

function StarPicker({ value, onChange }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6 }}>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity key={star} onPress={() => onChange(star)}>
          <Text style={{ fontSize: 28, color: star <= value ? GOLD : '#333' }}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function CastCard({ person, navigation }) {
  return (
    <TouchableOpacity
      style={styles.castCard}
      onPress={() => navigation.navigate('Cast', { person })}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: person.photo }}
        style={styles.castPhoto}
        resizeMode="cover"
      />
      <View style={styles.castOverlay} />
      <View style={styles.castInfo}>
        <Text style={styles.castName} numberOfLines={1}>{person.name}</Text>
        <Text style={styles.castRole} numberOfLines={1}>{person.role}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ReviewCard({ review, isOwn }) {
  const stars = Math.round(review.rating);
  return (
    <View style={[styles.reviewCard, isOwn && styles.reviewCardOwn]}>
      <View style={styles.reviewCardHeader}>
        <View style={styles.reviewAvatar}>
          <Text style={styles.reviewAvatarText}>{review.user[0].toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.reviewUser}>{review.user}</Text>
          <Text style={styles.reviewDate}>{review.date}</Text>
        </View>
        <Text style={{ color: GOLD, fontSize: 14, letterSpacing: 1 }}>
          {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
        </Text>
      </View>
      {review.text ? <Text style={styles.reviewText}>{review.text}</Text> : null}
    </View>
  );
}

function RecommendCard({ movie, navigation }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        style={styles.recCard}
        onPress={() => navigation.push('Detail', { movie })}
        onPressIn={() => Animated.spring(scaleAnim, { toValue: 0.95, useNativeDriver: true }).start()}
        onPressOut={() => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start()}
        activeOpacity={1}
      >
        <Image source={{ uri: movie.poster }} style={styles.recImage} resizeMode="cover" />
        <View style={styles.recOverlay} />
        <View style={styles.recBadge}>
          <Text style={styles.recBadgeText}>★ {fmt(movie.rating)}</Text>
        </View>
        <View style={styles.recBottom}>
          <Text style={styles.recTitle} numberOfLines={1}>{movie.title}</Text>
          <Text style={styles.recYear}>{movie.year}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function DetailScreen({ route, navigation }) {
  const { movie } = route.params;
  const scrollY = useRef(new Animated.Value(0)).current;
  const { isFavorite, toggleFavorite, isInWatchlist, toggleWatchlist, addReview, getReview, reviews } = useFavorites();
  const { user, isLoggedIn } = useAuth();
  const [reviewText, setReviewText] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [showReviewInput, setShowReviewInput] = useState(false);

  // Derive myReview directly from reviews object so it updates instantly after submit
  const myReview = isLoggedIn && user
    ? reviews[`${user.username}:${movie.id}`] || null
    : null;

  const headerOpacity = scrollY.interpolate({ inputRange: [0, 200], outputRange: [0, 1], extrapolate: 'clamp' });
  const posterScale = scrollY.interpolate({ inputRange: [-100, 0], outputRange: [1.15, 1], extrapolate: 'clamp' });

  const recommendations = movies
    .filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const handleSubmitReview = () => {
    if (!isLoggedIn) { Alert.alert('Login Required', 'Please log in to write a review.'); return; }
    if (starRating === 0) { Alert.alert('Please select a star rating'); return; }
    addReview(movie.id, starRating, reviewText, movie.title, user.username);
    setShowReviewInput(false);
    setReviewText('');
    setStarRating(0);
    Alert.alert(myReview ? '✅ Review updated!' : '✅ Review saved!');
  };

  const communityReviews = movie.reviews || [];
  const storedUserReviews = Object.entries(reviews)
    .filter(([key]) => key.endsWith(`:${movie.id}`))
    .map(([key, r]) => ({
      user: r.username || key.split(':')[0],
      rating: r.rating,
      text: r.text,
      date: r.date,
      isOwn: isLoggedIn && user && key === `${user.username}:${movie.id}`,
    }));
  const allReviews = [...storedUserReviews, ...communityReviews];

  return (
    <View style={styles.container}>
      {/* Animated sticky header */}
      <Animated.View style={[styles.floatingHeader, { opacity: headerOpacity }]}>
        <SafeAreaView edges={['top']}>
          <View style={styles.floatingHeaderInner}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.floatingTitle} numberOfLines={1}>{movie.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(movie)} style={styles.headerFavBtn}>
              <Text style={{ fontSize: 20 }}>{isFavorite(movie.id) ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        {/* Hero Backdrop */}
        <View style={styles.heroContainer}>
          <Animated.Image
            source={{ uri: movie.backdrop || movie.poster }}
            style={[styles.backdrop, { transform: [{ scale: posterScale }] }]}
            resizeMode="cover"
          />
          <View style={styles.backdropGradient} />

          <SafeAreaView edges={['top']} style={styles.safeBack}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backCircle}>
              <Text style={styles.backCircleText}>←</Text>
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.heroBottom}>
            <Image source={{ uri: movie.poster }} style={styles.poster} resizeMode="cover" />
            <View style={styles.heroText}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.metaItem}>{movie.year}</Text>
                <Text style={styles.metaDot}>·</Text>
                <Text style={styles.metaItem}>{movie.duration}</Text>
                <Text style={styles.metaDot}>·</Text>
                <Text style={styles.metaItem}>{movie.language}</Text>
              </View>
              <Text style={styles.director}>🎬 {movie.director}</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* Rating display */}
          <View style={styles.ratingSection}>
            <View style={styles.bigRating}>
              <Text style={styles.bigRatingNumber}>{fmt(movie.rating)}</Text>
              <Text style={styles.bigRatingStars}>{'★'.repeat(Math.round(movie.rating / 2))}</Text>
              <Text style={styles.bigRatingLabel}>/ 10 Score</Text>
            </View>
            <View style={styles.ratingBars}>
              <RatingBar label="Story" value={Math.min(10, movie.rating - 0.1)} color={GOLD} />
              <RatingBar label="Visual" value={Math.min(10, movie.rating + 0.2)} color="#42A5F5" />
              <RatingBar label="Music" value={Math.min(10, movie.rating - 0.3)} color="#00E676" />
            </View>
          </View>

          {/* Genre + Tag chips — clickable */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreScroll} contentContainerStyle={styles.genreContent}>
            {movie.genre.map(g => (
              <TouchableOpacity
                key={g}
                style={styles.genreTag}
                onPress={() => navigation.navigate('Tabs', { screen: 'Search', params: { filterTag: g } })}
                activeOpacity={0.8}
              >
                <Text style={styles.genreTagText}>{g}</Text>
              </TouchableOpacity>
            ))}
            {movie.tags?.map(t => (
              <TouchableOpacity
                key={t}
                style={[styles.genreTag, styles.specialTag]}
                onPress={() => navigation.navigate('Tabs', { screen: 'Search', params: { filterTag: t } })}
                activeOpacity={0.8}
              >
                <Text style={[styles.genreTagText, { color: GOLD }]}>#{t}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Synopsis */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📖 Synopsis</Text>
            <Text style={styles.description}>{movie.description}</Text>
          </View>

          {/* Action buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.actionBtn, isFavorite(movie.id) && styles.actionBtnFav]}
              onPress={() => toggleFavorite(movie)}
              activeOpacity={0.85}
            >
              <Text style={styles.actionBtnIcon}>{isFavorite(movie.id) ? '❤️' : '🤍'}</Text>
              <Text style={styles.actionBtnText}>{isFavorite(movie.id) ? 'Liked' : 'Like'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, isInWatchlist(movie.id) && styles.actionBtnWatch]}
              onPress={() => toggleWatchlist(movie)}
              activeOpacity={0.85}
            >
              <Text style={styles.actionBtnIcon}>{isInWatchlist(movie.id) ? '✅' : '📋'}</Text>
              <Text style={styles.actionBtnText}>{isInWatchlist(movie.id) ? 'Saved' : 'Watchlist'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionBtn, showReviewInput && styles.actionBtnActive]}
              onPress={() => {
                if (!isLoggedIn) {
                  Alert.alert('Login Required', 'Please log in to write a review.', [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Go to Login', onPress: () => navigation.navigate('Tabs', { screen: 'Profile' }) },
                  ]);
                  return;
                }
                if (!showReviewInput && myReview) {
                  // Pre-fill existing review for editing
                  setStarRating(myReview.rating);
                  setReviewText(myReview.text || '');
                }
                setShowReviewInput(!showReviewInput);
              }}
              activeOpacity={0.85}
            >
              <Text style={styles.actionBtnIcon}>{myReview ? '✏️' : '✍️'}</Text>
              <Text style={styles.actionBtnText}>{myReview ? 'Edit Review' : 'Review'}</Text>
            </TouchableOpacity>
          </View>

          {/* Review input */}
          {showReviewInput && (
            <View style={styles.reviewInputCard}>
              <Text style={styles.cardTitle}>{myReview ? '✏️ Edit Your Review' : '✍️ Write Your Review'}</Text>
              <StarPicker value={starRating} onChange={setStarRating} />
              <TextInput
                style={styles.reviewTextInput}
                placeholder="Share your thoughts about this film..."
                placeholderTextColor="#444"
                multiline
                value={reviewText}
                onChangeText={setReviewText}
                maxLength={300}
              />
              <TouchableOpacity style={styles.submitReviewBtn} onPress={handleSubmitReview}>
                <Text style={styles.submitReviewText}>Submit Review</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* All Reviews */}
          {allReviews.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>💬 Reviews ({allReviews.length})</Text>
              {allReviews.map((r, i) => (
                <ReviewCard key={i} review={r} isOwn={r.isOwn} />
              ))}
            </View>
          )}

          {/* Cast */}
          {movie.cast?.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎭 Cast</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
                {movie.cast.map((person, idx) => (
                  <CastCard key={idx} person={person} navigation={navigation} />
                ))}
              </ScrollView>
            </View>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎬 You May Also Like</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
                {recommendations.map(m => (
                  <RecommendCard key={m.id} movie={m} navigation={navigation} />
                ))}
              </ScrollView>
            </View>
          )}

          <View style={{ height: 30 }} />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },

  floatingHeader: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: '#0A0A0AEE' },
  floatingHeaderInner: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  floatingTitle: { flex: 1, color: '#FFF', fontWeight: '700', fontSize: 16, marginHorizontal: 12 },
  backBtn: { padding: 4 },
  backBtnText: { color: GOLD, fontSize: 22, fontWeight: '700' },
  headerFavBtn: { padding: 4 },

  heroContainer: { height: height * 0.52, overflow: 'hidden' },
  backdrop: { width: '100%', height: '100%' },
  backdropGradient: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(10,10,10,0.55)', top: '25%' },
  safeBack: { position: 'absolute', top: 0, left: 0, right: 0 },
  backCircle: { margin: 16, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.65)', borderWidth: 1, borderColor: '#333', alignItems: 'center', justifyContent: 'center' },
  backCircleText: { color: '#FFF', fontSize: 20, fontWeight: '700' },
  heroBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', padding: 20, gap: 14, alignItems: 'flex-end' },
  poster: { width: 100, height: 150, borderRadius: 12, borderWidth: 2, borderColor: GOLD },
  heroText: { flex: 1, paddingBottom: 4 },
  title: { fontSize: 22, fontWeight: '900', color: '#FFF', lineHeight: 26, marginBottom: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  metaItem: { color: '#CCC', fontSize: 12 },
  metaDot: { color: '#555' },
  director: { color: GOLD, fontSize: 12, fontWeight: '600' },

  body: { paddingTop: 4 },

  ratingSection: { flexDirection: 'row', margin: 16, gap: 16, backgroundColor: '#111', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#222' },
  bigRating: { alignItems: 'center', justifyContent: 'center', minWidth: 76 },
  bigRatingNumber: { fontSize: 38, fontWeight: '900', color: GOLD, lineHeight: 44 },
  bigRatingStars: { color: GOLD, fontSize: 11, letterSpacing: 2 },
  bigRatingLabel: { color: '#555', fontSize: 9, fontWeight: '600', marginTop: 2 },
  ratingBars: { flex: 1, gap: 8, justifyContent: 'center' },
  ratingBarRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  ratingBarLabel: { color: '#888', fontSize: 10, width: 38 },
  ratingBarTrack: { flex: 1, height: 6, backgroundColor: '#222', borderRadius: 3, overflow: 'hidden' },
  ratingBarFill: { height: '100%', borderRadius: 3 },
  ratingBarValue: { fontSize: 11, fontWeight: '700', width: 26, textAlign: 'right' },

  genreScroll: { marginBottom: 4 },
  genreContent: { paddingHorizontal: 16, gap: 8, paddingVertical: 8 },
  genreTag: { backgroundColor: 'rgba(255,255,255,0.07)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#2A2A2A' },
  specialTag: { borderColor: 'rgba(201,168,76,0.35)', backgroundColor: 'rgba(201,168,76,0.07)' },
  genreTagText: { color: '#CCC', fontSize: 12, fontWeight: '600' },

  card: { marginHorizontal: 16, marginBottom: 16, backgroundColor: '#111', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#1E1E1E' },
  cardTitle: { color: '#FFF', fontSize: 16, fontWeight: '700', marginBottom: 10 },
  description: { color: '#AAA', fontSize: 14, lineHeight: 22 },

  actionRow: { flexDirection: 'row', gap: 10, marginHorizontal: 16, marginBottom: 16 },
  actionBtn: { flex: 1, alignItems: 'center', paddingVertical: 12, backgroundColor: '#111', borderRadius: 14, borderWidth: 1, borderColor: '#222', gap: 4 },
  actionBtnFav: { backgroundColor: 'rgba(255,50,50,0.1)', borderColor: '#FF4444' },
  actionBtnWatch: { backgroundColor: 'rgba(0,230,118,0.08)', borderColor: '#00E676' },
  actionBtnActive: { borderColor: GOLD },
  actionBtnIcon: { fontSize: 20 },
  actionBtnText: { color: '#888', fontSize: 10, fontWeight: '600' },

  reviewInputCard: { marginHorizontal: 16, marginBottom: 16, backgroundColor: '#111', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#1E1E1E', gap: 12 },
  reviewTextInput: { backgroundColor: '#1A1A1A', borderRadius: 10, padding: 12, color: '#FFF', fontSize: 14, height: 90, textAlignVertical: 'top', borderWidth: 1, borderColor: '#2A2A2A' },
  submitReviewBtn: { backgroundColor: GOLD, borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  submitReviewText: { color: '#000', fontWeight: '800', fontSize: 14 },

  section: { marginBottom: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#FFF', marginBottom: 12 },

  // Review cards
  reviewCard: { backgroundColor: '#111', borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: '#1E1E1E' },
  reviewCardOwn: { borderColor: GOLD + '55' },
  reviewCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  reviewAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', borderWidth: 1, borderColor: '#333', alignItems: 'center', justifyContent: 'center' },
  reviewAvatarText: { color: GOLD, fontWeight: '800', fontSize: 16 },
  reviewUser: { color: '#FFF', fontWeight: '700', fontSize: 13 },
  reviewDate: { color: '#555', fontSize: 11, marginTop: 1 },
  reviewText: { color: '#AAA', fontSize: 13, lineHeight: 20 },

  // Cast
  castCard: { width: 90, height: 130, borderRadius: 12, overflow: 'hidden', backgroundColor: '#1A1A1A' },
  castPhoto: { width: '100%', height: '100%' },
  castOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.35)', top: '55%' },
  castInfo: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 6, backgroundColor: 'rgba(0,0,0,0.8)' },
  castName: { color: '#FFF', fontSize: 9, fontWeight: '700' },
  castRole: { color: GOLD, fontSize: 8 },

  // Recommendations
  recCard: { width: 130, height: 190, borderRadius: 12, overflow: 'hidden', backgroundColor: '#1A1A1A' },
  recImage: { width: '100%', height: '100%' },
  recOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)', top: '55%' },
  recBadge: { position: 'absolute', top: 8, left: 8, backgroundColor: GOLD, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
  recBadgeText: { color: '#000', fontWeight: '800', fontSize: 10 },
  recBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 8, backgroundColor: 'rgba(0,0,0,0.82)' },
  recTitle: { color: '#FFF', fontWeight: '700', fontSize: 12 },
  recYear: { color: '#888', fontSize: 10 },
});