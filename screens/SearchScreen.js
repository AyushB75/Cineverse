import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList, Image, TouchableOpacity,
  StyleSheet, Animated, Dimensions, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import movies from '../data/movies';
import { useFavorites } from '../context/FavoritesContext';

const { width } = Dimensions.get('window');
const GOLD = '#C9A84C';
const BG = '#0A0A0A';

const LANGS = ['All', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'English', 'Korean', 'Japanese'];
const SORTS = ['Relevance', 'Rating ↓', 'Year ↓', 'Year ↑'];

const fmt = (n) => parseFloat(n.toFixed(1));

function SearchResultCard({ movie, navigation }) {
  const slideAnim = useRef(new Animated.Value(20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  }, []);

  const ratingColor = movie.rating >= 8.5 ? '#00E676' : movie.rating >= 7.5 ? GOLD : '#42A5F5';

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
      <TouchableOpacity
        style={styles.resultCard}
        onPress={() => navigation.navigate('Detail', { movie })}
        activeOpacity={0.85}
      >
        <Image source={{ uri: movie.poster }} style={styles.resultPoster} resizeMode="cover" />
        <View style={styles.resultInfo}>
          <View style={styles.resultTopRow}>
            <Text style={styles.resultTitle} numberOfLines={1}>{movie.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(movie)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Text style={{ fontSize: 18 }}>{isFavorite(movie.id) ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resultMeta}>
            <View style={[styles.resultRating, { backgroundColor: ratingColor }]}>
              <Text style={styles.resultRatingText}>★ {fmt(movie.rating)}</Text>
            </View>
            <Text style={styles.resultMetaText}>{movie.year}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.resultMetaText}>{movie.duration}</Text>
          </View>

          <Text style={styles.resultLang}>{movie.language} · {movie.director}</Text>

          <View style={styles.resultGenres}>
            {movie.genre.slice(0, 3).map(g => (
              <View key={g} style={styles.resultGenrePill}>
                <Text style={styles.resultGenreText}>{g}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.resultDesc} numberOfLines={2}>{movie.description}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function SearchScreen({ navigation, route }) {
  const [query, setQuery] = useState('');
  const [activeLang, setActiveLang] = useState('All');
  const [activeSort, setActiveSort] = useState('Relevance');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const searchBarAnim = useRef(new Animated.Value(0)).current;

  // Accept tag/filter from Detail screen navigation
  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.filterTag) {
        setQuery(route.params.filterTag);
        navigation.setParams({ filterTag: null });
      }
    }, [route.params?.filterTag])
  );

  useEffect(() => {
    Animated.timing(searchBarAnim, { toValue: isFocused ? 1 : 0, duration: 200, useNativeDriver: false }).start();
  }, [isFocused]);

  const borderColor = searchBarAnim.interpolate({ inputRange: [0, 1], outputRange: ['#222', GOLD] });

  const filtered = movies
    .filter(m => {
      const q = query.toLowerCase().trim();
      if (!q && activeLang === 'All') return true;

      const matchesQuery = !q || (
        m.title.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.cast?.some(c => c.name.toLowerCase().includes(q)) ||
        m.genre.some(g => g.toLowerCase().includes(q)) ||
        m.tags?.some(t => t.toLowerCase().includes(q)) ||
        // keywords field covers bollywood, tollywood, south indian, hollywood etc.
        m.keywords?.some(k => k.toLowerCase().includes(q)) ||
        m.language.toLowerCase().includes(q) ||
        String(m.year).includes(q)
      );

      const matchesLang = activeLang === 'All' || m.language === activeLang;
      return matchesQuery && matchesLang;
    })
    .sort((a, b) => {
      if (activeSort === 'Rating ↓') return b.rating - a.rating;
      if (activeSort === 'Year ↓') return b.year - a.year;
      if (activeSort === 'Year ↑') return a.year - b.year;
      return 0;
    });

  const topDirectors = [...new Set(movies.map(m => m.director))].slice(0, 8);
  const popularSearches = ['Bollywood', 'South Indian', 'Hollywood', 'Christopher Nolan', 'S. S. Rajamouli', 'Spy', 'Horror Comedy', 'Oscar Winner', 'Marvel'];

  const showDefault = !query && activeLang === 'All';

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🔍 Discover</Text>
        </View>

        {/* Search bar */}
        <Animated.View style={[styles.searchBar, { borderColor }]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Movies, cast, directors, genres..."
            placeholderTextColor="#555"
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            returnKeyType="search"
            autoCapitalize="none"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')} style={styles.clearBtn}>
              <Text style={styles.clearText}>✕</Text>
            </TouchableOpacity>
          )}
        </Animated.View>

        {/* Language filter */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.langScroll}>
          {LANGS.map(lang => (
            <TouchableOpacity
              key={lang}
              style={[styles.langPill, activeLang === lang && styles.langPillActive]}
              onPress={() => setActiveLang(lang)}
              activeOpacity={0.8}
            >
              <Text style={[styles.langText, activeLang === lang && styles.langTextActive]}>{lang}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sort */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.sortScroll}>
          {SORTS.map(s => (
            <TouchableOpacity
              key={s}
              style={[styles.sortPill, activeSort === s && styles.sortPillActive]}
              onPress={() => setActiveSort(s)}
              activeOpacity={0.8}
            >
              <Text style={[styles.sortText, activeSort === s && styles.sortTextActive]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>

      {/* Results count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>
          {showDefault ? `${movies.length} movies` : `${filtered.length} result${filtered.length !== 1 ? 's' : ''}`}
        </Text>
        {!showDefault && (
          <TouchableOpacity onPress={() => { setQuery(''); setActiveLang('All'); }}>
            <Text style={styles.clearAll}>Clear all</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={showDefault ? movies : filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SearchResultCard movie={item} navigation={navigation} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={showDefault ? () => (
          <View>
            {/* Browse by director */}
            <View style={styles.suggestSection}>
              <Text style={styles.suggestTitle}>🎬 Browse by Director</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.directorScroll}>
                {topDirectors.map(d => (
                  <TouchableOpacity key={d} style={styles.directorChip} onPress={() => setQuery(d)} activeOpacity={0.8}>
                    <Text style={styles.directorName} numberOfLines={1}>{d}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Popular searches */}
            <View style={styles.suggestSection}>
              <Text style={styles.suggestTitle}>🔥 Popular Searches</Text>
              {popularSearches.map(q => (
                <TouchableOpacity key={q} style={styles.quickSearch} onPress={() => setQuery(q)} activeOpacity={0.8}>
                  <Text style={styles.quickSearchIcon}>↗</Text>
                  <Text style={styles.quickSearchText}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.suggestTitle2}>🎞 All Movies</Text>
          </View>
        ) : null}
        ListEmptyComponent={() => (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🎬</Text>
            <Text style={styles.emptyTitle}>No movies found</Text>
            <Text style={styles.emptySubtitle}>Try "Bollywood", "South Indian", "Action" or a director's name</Text>
            <TouchableOpacity style={styles.emptyBtn} onPress={() => { setQuery(''); setActiveLang('All'); }}>
              <Text style={styles.emptyBtnText}>Browse All Movies</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  headerTitle: { fontSize: 26, fontWeight: '900', color: '#FFF' },

  searchBar: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 12, backgroundColor: '#111', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, borderWidth: 1.5, gap: 10 },
  searchIcon: { fontSize: 16 },
  searchInput: { flex: 1, color: '#FFF', fontSize: 15 },
  clearBtn: { padding: 4 },
  clearText: { color: '#555', fontSize: 16, fontWeight: '700' },

  langScroll: { paddingHorizontal: 16, gap: 8, paddingBottom: 10 },
  langPill: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: '#111', borderWidth: 1, borderColor: '#2A2A2A' },
  langPillActive: { backgroundColor: GOLD, borderColor: GOLD },
  langText: { color: '#777', fontSize: 12, fontWeight: '600' },
  langTextActive: { color: '#000', fontWeight: '800' },

  sortScroll: { paddingHorizontal: 16, gap: 8, paddingBottom: 10 },
  sortPill: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2A2A2A' },
  sortPillActive: { borderColor: GOLD },
  sortText: { color: '#555', fontSize: 11, fontWeight: '600' },
  sortTextActive: { color: GOLD, fontWeight: '700' },

  resultsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 10 },
  resultsCount: { color: '#555', fontSize: 13, fontWeight: '600' },
  clearAll: { color: GOLD, fontSize: 12, fontWeight: '700' },

  listContent: { paddingHorizontal: 16, paddingBottom: 30 },

  resultCard: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#1A1A1A' },
  resultPoster: { width: 95, height: 140 },
  resultInfo: { flex: 1, padding: 12, gap: 5 },
  resultTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  resultTitle: { fontSize: 15, fontWeight: '800', color: '#FFF', flex: 1, marginRight: 8 },
  resultMeta: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  resultRating: { paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6 },
  resultRatingText: { color: '#000', fontWeight: '800', fontSize: 11 },
  resultMetaText: { color: '#888', fontSize: 12 },
  metaDot: { color: '#444' },
  resultLang: { color: '#666', fontSize: 11 },
  resultGenres: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  resultGenrePill: { backgroundColor: '#1E1E1E', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  resultGenreText: { color: '#888', fontSize: 10, fontWeight: '600' },
  resultDesc: { color: '#555', fontSize: 11, lineHeight: 16 },

  suggestSection: { marginBottom: 20 },
  suggestTitle: { fontSize: 18, fontWeight: '800', color: '#FFF', marginBottom: 12 },
  suggestTitle2: { fontSize: 18, fontWeight: '800', color: '#FFF', marginBottom: 12 },
  directorScroll: { gap: 10 },
  directorChip: { backgroundColor: '#111', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10, borderWidth: 1, borderColor: '#222', maxWidth: 140 },
  directorName: { color: GOLD, fontSize: 12, fontWeight: '700' },
  quickSearch: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#151515', gap: 12 },
  quickSearchIcon: { color: GOLD, fontSize: 16, fontWeight: '700' },
  quickSearchText: { color: '#CCC', fontSize: 14 },

  emptyState: { alignItems: 'center', paddingVertical: 60, gap: 12 },
  emptyEmoji: { fontSize: 60 },
  emptyTitle: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  emptySubtitle: { color: '#555', fontSize: 14, textAlign: 'center', paddingHorizontal: 30 },
  emptyBtn: { marginTop: 10, backgroundColor: GOLD, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  emptyBtnText: { color: '#000', fontWeight: '800', fontSize: 14 },
});
