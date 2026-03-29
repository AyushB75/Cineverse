import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  StyleSheet, Animated, Dimensions, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

const { width } = Dimensions.get('window');
const GOLD = '#C9A84C';
const BG = '#0A0A0A';

function StatCard({ label, value, color, emoji }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(scaleAnim, { toValue: 1, tension: 80, friction: 8, useNativeDriver: true }).start();
  }, []);
  return (
    <Animated.View style={[styles.statCard, { transform: [{ scale: scaleAnim }] }]}>
      <Text style={styles.statEmoji}>{emoji}</Text>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Animated.View>
  );
}

function GenreBar({ genre, count, total }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, { toValue: count / total, duration: 800, delay: 300, useNativeDriver: false }).start();
  }, [count, total]);
  const colors = { Action: '#FF6B35', Drama: '#42A5F5', 'Sci-Fi': '#00E676', Crime: '#FF4444', Thriller: '#FF9800', Comedy: '#FFEB3B', History: GOLD, Animation: '#E040FB' };
  const color = colors[genre] || GOLD;
  return (
    <View style={styles.genreBarRow}>
      <Text style={styles.genreBarLabel}>{genre}</Text>
      <View style={styles.genreBarTrack}>
        <Animated.View style={[styles.genreBarFill, { width: anim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }), backgroundColor: color }]} />
      </View>
      <Text style={[styles.genreBarCount, { color }]}>{count}</Text>
    </View>
  );
}

function MovieListItem({ movie, navigation, onRemove, type }) {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const handleRemove = () => {
    Animated.timing(slideAnim, { toValue: width, duration: 300, useNativeDriver: true }).start(() => onRemove(movie));
  };
  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('Detail', { movie })}
        activeOpacity={0.85}
      >
        <Image source={{ uri: movie.poster }} style={styles.listPoster} resizeMode="cover" />
        <View style={styles.listInfo}>
          <Text style={styles.listTitle} numberOfLines={1}>{movie.title}</Text>
          <View style={styles.listMeta}>
            <View style={styles.listRating}>
              <Text style={styles.listRatingText}>★ {movie.rating}</Text>
            </View>
            <Text style={styles.listMetaText}>{movie.year} · {movie.language}</Text>
          </View>
          <View style={styles.listGenres}>
            {movie.genre.slice(0, 2).map(g => (
              <View key={g} style={styles.listGenrePill}>
                <Text style={styles.listGenreText}>{g}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.listDirector}>{movie.director}</Text>
        </View>
        <TouchableOpacity style={styles.removeBtn} onPress={handleRemove} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.removeBtnText}>✕</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function FavoritesScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Favorites');
  const { favorites, watchlist, reviews, toggleFavorite, toggleWatchlist } = useFavorites();
  const { user, isLoggedIn } = useAuth();
  const tabAnim = useRef(new Animated.Value(0)).current;

  const tabs = ['Favorites', 'Watchlist', 'Reviews', 'Stats'];
  const tabIndex = tabs.indexOf(activeTab);

  useEffect(() => {
    Animated.spring(tabAnim, { toValue: tabIndex, tension: 100, friction: 12, useNativeDriver: true }).start();
  }, [tabIndex]);

  // Genre stats from favorites
  const allMovies = [...favorites, ...watchlist];
  const genreCounts = {};
  allMovies.forEach(m => m.genre.forEach(g => { genreCounts[g] = (genreCounts[g] || 0) + 1; }));
  const topGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxCount = topGenres[0]?.[1] || 1;

  // Only show THIS user's reviews (key format: "username:movieId")
  const myReviews = isLoggedIn && user
    ? Object.entries(reviews).filter(([key]) => key.startsWith(`${user.username}:`))
    : [];

  const reviewCount = myReviews.length;
  const currentData = activeTab === 'Favorites' ? favorites : watchlist;

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>My Cinema</Text>
            <Text style={styles.headerSub}>Your personal movie space</Text>
          </View>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>{favorites.length + watchlist.length}</Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabBar}>
          <View style={styles.tabIndicatorTrack}>
            <Animated.View style={[styles.tabIndicator, {
              transform: [{ translateX: tabAnim.interpolate({ inputRange: [0, 1, 2, 3], outputRange: [0, (width - 32) / 4, (width - 32) / 2, (width - 32) * 3 / 4] }) }]
            }]} />
          </View>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              {tab === 'Favorites' && favorites.length > 0 && (
                <View style={styles.tabBadge}><Text style={styles.tabBadgeText}>{favorites.length}</Text></View>
              )}
              {tab === 'Watchlist' && watchlist.length > 0 && (
                <View style={[styles.tabBadge, { backgroundColor: '#42A5F5' }]}><Text style={styles.tabBadgeText}>{watchlist.length}</Text></View>
              )}
              {tab === 'Reviews' && reviewCount > 0 && (
                <View style={[styles.tabBadge, { backgroundColor: '#00E676' }]}><Text style={styles.tabBadgeText}>{reviewCount}</Text></View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>

      {/* Tab content */}
      {(activeTab === 'Favorites' || activeTab === 'Watchlist') && (
        currentData.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>{activeTab === 'Favorites' ? '❤️' : '📋'}</Text>
            <Text style={styles.emptyTitle}>{activeTab === 'Favorites' ? 'No Favorites Yet' : 'Watchlist is Empty'}</Text>
            <Text style={styles.emptySubtitle}>{activeTab === 'Favorites' ? 'Tap ❤️ on any movie to add it here' : 'Tap 📋 on any movie to save it for later'}</Text>
          </View>
        ) : (
          <FlatList
            data={currentData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MovieListItem
                movie={item}
                navigation={navigation}
                type={activeTab}
                onRemove={activeTab === 'Favorites' ? toggleFavorite : toggleWatchlist}
              />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        )
      )}

      {activeTab === 'Reviews' && (
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {!isLoggedIn ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🔐</Text>
              <Text style={styles.emptyTitle}>Login to See Reviews</Text>
              <Text style={styles.emptySubtitle}>Sign in to write and view your movie reviews</Text>
            </View>
          ) : myReviews.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>✍️</Text>
              <Text style={styles.emptyTitle}>No Reviews Yet</Text>
              <Text style={styles.emptySubtitle}>Open any movie and tap Review to share your thoughts</Text>
            </View>
          ) : (
            myReviews.map(([key, review]) => {
              // key format: "username:movieId"
              const movieId = key.split(':').slice(1).join(':');
              const movie = [...favorites, ...watchlist].find(m => m.id === movieId)
                || { title: review.movieTitle || 'Unknown Movie', poster: null };
              return (
                <View key={key} style={styles.reviewCard}>
                  <View style={styles.reviewCardTop}>
                    {movie.poster && <Image source={{ uri: movie.poster }} style={styles.reviewPoster} />}
                    <View style={styles.reviewCardInfo}>
                      <Text style={styles.reviewMovieTitle} numberOfLines={1}>{movie.title}</Text>
                      <Text style={{ color: GOLD, fontSize: 16 }}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</Text>
                      <Text style={styles.reviewDate}>{review.date}</Text>
                    </View>
                  </View>
                  {review.text ? <Text style={styles.reviewText}>{review.text}</Text> : null}
                </View>
              );
            })
          )}
        </ScrollView>
      )}

      {activeTab === 'Stats' && (
        <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {/* Stat cards */}
          <View style={styles.statsGrid}>
            <StatCard label="Favorites" value={favorites.length} color={GOLD} emoji="❤️" />
            <StatCard label="Watchlist" value={watchlist.length} color="#42A5F5" emoji="📋" />
            <StatCard label="Reviews" value={reviewCount} color="#00E676" emoji="✍️" />
          </View>

          {/* Genre breakdown */}
          {topGenres.length > 0 ? (
            <View style={styles.genreSection}>
              <Text style={styles.genreSectionTitle}>🎭 Your Top Genres</Text>
              {topGenres.map(([genre, count]) => (
                <GenreBar key={genre} genre={genre} count={count} total={maxCount} />
              ))}
            </View>
          ) : (
            <View style={styles.emptyStats}>
              <Text style={styles.emptyStatsText}>Add movies to favorites or watchlist to see your stats!</Text>
            </View>
          )}

          {/* Language breakdown */}
          {allMovies.length > 0 && (
            <View style={styles.genreSection}>
              <Text style={styles.genreSectionTitle}>🌍 Languages You Watch</Text>
              {[...new Set(allMovies.map(m => m.language))].map(lang => (
                <View key={lang} style={styles.langStatRow}>
                  <Text style={styles.langStatLabel}>{lang}</Text>
                  <Text style={styles.langStatCount}>{allMovies.filter(m => m.language === lang).length} movies</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: '900', color: '#FFF' },
  headerSub: { color: '#555', fontSize: 12, marginTop: 2 },
  headerBadge: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1A1A1A', borderWidth: 1, borderColor: GOLD, alignItems: 'center', justifyContent: 'center' },
  headerBadgeText: { color: GOLD, fontWeight: '800', fontSize: 16 },

  // Tabs
  tabBar: { flexDirection: 'row', marginHorizontal: 16, marginBottom: 8, backgroundColor: '#111', borderRadius: 14, padding: 4, position: 'relative' },
  tabIndicatorTrack: { position: 'absolute', top: 4, left: 4, right: 4, bottom: 4, borderRadius: 10 },
  tabIndicator: { position: 'absolute', top: 0, left: 0, width: '25%', height: '100%', backgroundColor: GOLD, borderRadius: 10 },
  tab: { flex: 1, paddingVertical: 9, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 4 },
  tabText: { color: '#666', fontSize: 11, fontWeight: '700' },
  tabTextActive: { color: '#000' },
  tabBadge: { backgroundColor: GOLD, borderRadius: 8, paddingHorizontal: 5, paddingVertical: 1 },
  tabBadgeText: { color: '#000', fontSize: 9, fontWeight: '800' },

  listContent: { padding: 16, paddingBottom: 30 },

  // List item
  listItem: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#1A1A1A' },
  listPoster: { width: 80, height: 120 },
  listInfo: { flex: 1, padding: 12, gap: 5 },
  listTitle: { color: '#FFF', fontWeight: '800', fontSize: 15 },
  listMeta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  listRating: { backgroundColor: GOLD, paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6 },
  listRatingText: { color: '#000', fontWeight: '800', fontSize: 11 },
  listMetaText: { color: '#888', fontSize: 12 },
  listGenres: { flexDirection: 'row', gap: 6 },
  listGenrePill: { backgroundColor: '#1E1E1E', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  listGenreText: { color: '#777', fontSize: 10, fontWeight: '600' },
  listDirector: { color: '#555', fontSize: 11 },
  removeBtn: { padding: 14, justifyContent: 'center' },
  removeBtnText: { color: '#444', fontSize: 16, fontWeight: '700' },

  // Stats
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 20 },
  statCard: { flex: 1, minWidth: (width - 56) / 2, backgroundColor: '#111', borderRadius: 16, padding: 18, alignItems: 'center', gap: 6, borderWidth: 1, borderColor: '#1E1E1E' },
  statEmoji: { fontSize: 28 },
  statValue: { fontSize: 32, fontWeight: '900' },
  statLabel: { color: '#666', fontSize: 12, fontWeight: '600' },

  genreSection: { backgroundColor: '#111', borderRadius: 16, padding: 16, marginBottom: 16, borderWidth: 1, borderColor: '#1E1E1E' },
  genreSectionTitle: { color: '#FFF', fontSize: 16, fontWeight: '800', marginBottom: 14 },
  genreBarRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  genreBarLabel: { color: '#888', fontSize: 12, width: 60 },
  genreBarTrack: { flex: 1, height: 8, backgroundColor: '#1E1E1E', borderRadius: 4, overflow: 'hidden' },
  genreBarFill: { height: '100%', borderRadius: 4 },
  genreBarCount: { width: 20, fontWeight: '700', fontSize: 12, textAlign: 'right' },

  langStatRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#1A1A1A' },
  langStatLabel: { color: '#CCC', fontSize: 14, fontWeight: '600' },
  langStatCount: { color: GOLD, fontSize: 13, fontWeight: '700' },

  // Reviews
  reviewCard: { backgroundColor: '#111', borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#1E1E1E' },
  reviewCardTop: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  reviewPoster: { width: 50, height: 70, borderRadius: 8 },
  reviewCardInfo: { flex: 1, gap: 4 },
  reviewMovieTitle: { color: '#FFF', fontWeight: '700', fontSize: 14 },
  reviewDate: { color: '#555', fontSize: 11 },
  reviewText: { color: '#AAA', fontSize: 13, lineHeight: 20 },

  // Empty
  emptyState: { flex: 1, alignItems: 'center', paddingVertical: 80, gap: 12 },
  emptyEmoji: { fontSize: 64 },
  emptyTitle: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  emptySubtitle: { color: '#555', fontSize: 14, textAlign: 'center', paddingHorizontal: 40 },
  emptyStats: { padding: 20, alignItems: 'center' },
  emptyStatsText: { color: '#555', textAlign: 'center', fontSize: 14, lineHeight: 22 },
});