import React, { useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, Image, TouchableOpacity,
  StyleSheet, Animated, Dimensions, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import movies from '../data/movies';

const { width, height } = Dimensions.get('window');
const GOLD = '#C9A84C';
const BG = '#0A0A0A';

export default function CastScreen({ route, navigation }) {
  const { person } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  // Find ALL movies this person appears in
  const personMovies = movies.filter(m =>
    m.cast.some(c => c.name === person.name) ||
    m.director === person.name
  );

  const isDirector = movies.some(m => m.director === person.name);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const genres = [...new Set(personMovies.flatMap(m => m.genre))];

  return (
    <View style={styles.container}>
      {/* Back */}
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
      >
        {/* Profile hero */}
        <View style={styles.profileHero}>
          <View style={styles.photoContainer}>
            <Image source={{ uri: person.photo }} style={styles.photo} resizeMode="cover" />
            <View style={styles.photoGlow} />
          </View>

          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.role}>as {person.role}</Text>

          {isDirector && (
            <View style={styles.directorBadge}>
              <Text style={styles.directorBadgeText}>🎬 Director</Text>
            </View>
          )}

          {/* Stats row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: GOLD }]}>{personMovies.length}</Text>
              <Text style={styles.statLabel}>Movies</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: '#42A5F5' }]}>{genres.length}</Text>
              <Text style={styles.statLabel}>Genres</Text>
            </View>
          </View>
        </View>

        {/* Genre tags */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.genreScroll}>
          {genres.map(g => (
            <View key={g} style={styles.genreTag}>
              <Text style={styles.genreTagText}>{g}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Movies */}
        <View style={styles.moviesSection}>
          <Text style={styles.sectionTitle}>
            {personMovies.length > 0 ? `🎬 Filmography (${personMovies.length})` : 'No movies found'}
          </Text>

          {personMovies.length === 0 && (
            <View style={styles.noMovies}>
              <Text style={styles.noMoviesText}>No movies in our database yet for this person.</Text>
            </View>
          )}

          {personMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              style={styles.movieRow}
              onPress={() => navigation.push('Detail', { movie })}
              activeOpacity={0.85}
            >
              <Image source={{ uri: movie.poster }} style={styles.moviePoster} resizeMode="cover" />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle} numberOfLines={1}>{movie.title}</Text>
                <View style={styles.movieMeta}>
                  <View style={styles.movieRating}>
                    <Text style={styles.movieRatingText}>★ {movie.rating}</Text>
                  </View>
                  <Text style={styles.movieYear}>{movie.year}</Text>
                  <Text style={styles.movieDot}>·</Text>
                  <Text style={styles.movieLang}>{movie.language}</Text>
                </View>
                <Text style={styles.movieDir}>Dir: {movie.director}</Text>
                <View style={styles.movieGenres}>
                  {movie.genre.slice(0, 2).map(g => (
                    <View key={g} style={styles.movieGenrePill}>
                      <Text style={styles.movieGenreText}>{g}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  safeArea: { paddingHorizontal: 16, paddingBottom: 8 },
  backBtn: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  backBtnText: { color: GOLD, fontSize: 16, fontWeight: '700' },

  // Profile
  profileHero: { alignItems: 'center', paddingVertical: 24, paddingHorizontal: 20 },
  photoContainer: { position: 'relative', marginBottom: 16 },
  photo: { width: 130, height: 130, borderRadius: 65, borderWidth: 3, borderColor: GOLD },
  photoGlow: { position: 'absolute', top: -4, left: -4, right: -4, bottom: -4, borderRadius: 69, borderWidth: 1, borderColor: 'rgba(201,168,76,0.3)' },
  name: { fontSize: 26, fontWeight: '900', color: '#FFF', textAlign: 'center', marginBottom: 4 },
  role: { color: GOLD, fontSize: 14, fontWeight: '600', marginBottom: 10 },
  directorBadge: { backgroundColor: 'rgba(201,168,76,0.15)', borderWidth: 1, borderColor: GOLD, paddingHorizontal: 14, paddingVertical: 5, borderRadius: 20, marginBottom: 16 },
  directorBadgeText: { color: GOLD, fontSize: 13, fontWeight: '700' },

  statsRow: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, paddingVertical: 16, paddingHorizontal: 20, width: '100%', borderWidth: 1, borderColor: '#1E1E1E' },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 28, fontWeight: '900' },
  statLabel: { color: '#666', fontSize: 11, marginTop: 2, fontWeight: '600' },
  statDivider: { width: 1, backgroundColor: '#222' },

  // Genres
  genreScroll: { paddingHorizontal: 16, gap: 8, paddingVertical: 12 },
  genreTag: { backgroundColor: '#111', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 7, borderWidth: 1, borderColor: '#2A2A2A' },
  genreTagText: { color: '#AAA', fontSize: 12, fontWeight: '600' },

  // Movies
  moviesSection: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#FFF', marginBottom: 14 },
  noMovies: { padding: 20, alignItems: 'center' },
  noMoviesText: { color: '#555', fontSize: 14, textAlign: 'center' },
  movieRow: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#1A1A1A', alignItems: 'center' },
  moviePoster: { width: 75, height: 110 },
  movieInfo: { flex: 1, padding: 12, gap: 5 },
  movieTitle: { color: '#FFF', fontWeight: '800', fontSize: 15 },
  movieMeta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  movieRating: { backgroundColor: GOLD, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 5 },
  movieRatingText: { color: '#000', fontWeight: '800', fontSize: 11 },
  movieYear: { color: '#888', fontSize: 12 },
  movieDot: { color: '#444' },
  movieLang: { color: '#888', fontSize: 12 },
  movieDir: { color: '#555', fontSize: 11 },
  movieGenres: { flexDirection: 'row', gap: 6 },
  movieGenrePill: { backgroundColor: '#1E1E1E', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  movieGenreText: { color: '#777', fontSize: 10, fontWeight: '600' },
  arrowIcon: { color: '#444', fontSize: 24, paddingHorizontal: 12 },
});