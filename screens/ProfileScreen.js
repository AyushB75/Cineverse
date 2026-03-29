import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Animated, Alert, KeyboardAvoidingView, Platform, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';

const GOLD = '#C9A84C';
const BG = '#0A0A0A';

function InputField({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) {
  const [focused, setFocused] = useState(false);
  const borderAnim = useRef(new Animated.Value(0)).current;

  const onFocus = () => {
    setFocused(true);
    Animated.timing(borderAnim, { toValue: 1, duration: 200, useNativeDriver: false }).start();
  };
  const onBlur = () => {
    setFocused(false);
    Animated.timing(borderAnim, { toValue: 0, duration: 200, useNativeDriver: false }).start();
  };

  const borderColor = borderAnim.interpolate({ inputRange: [0, 1], outputRange: ['#222', GOLD] });

  return (
    <View style={styles.inputWrap}>
      <Text style={styles.inputLabel}>{label}</Text>
      <Animated.View style={[styles.inputBox, { borderColor }]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#444"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Animated.View>
    </View>
  );
}

function StarPicker({ value, onChange }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6 }}>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity key={star} onPress={() => onChange(star)}>
          <Text style={{ fontSize: 26, color: star <= value ? GOLD : '#333' }}>★</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ─── Login / Signup Form ──────────────────────────────────────────────
function AuthForm() {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signUp } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) { Alert.alert('Please fill all fields'); return; }
    if (mode === 'signup' && !username) { Alert.alert('Please enter a username'); return; }
    setLoading(true);

    let result;
    if (mode === 'signup') {
      result = await signUp(username, email, password);
    } else {
      result = await login(email, password);
    }

    setLoading(false);
    if (!result.success) Alert.alert('Error', result.error);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.authScroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.authHero}>
          <View style={styles.authLogo}>
            <Text style={{ fontSize: 44 }}>🎬</Text>
          </View>
          <Text style={styles.authTitle}>CINÉVERSE</Text>
          <Text style={styles.authSubtitle}>
            {mode === 'login' ? 'Welcome back. Sign in to continue.' : 'Create your account to start reviewing.'}
          </Text>
        </View>

        {/* Mode tabs */}
        <View style={styles.modeTabs}>
          <TouchableOpacity
            style={[styles.modeTab, mode === 'login' && styles.modeTabActive]}
            onPress={() => setMode('login')}
          >
            <Text style={[styles.modeTabText, mode === 'login' && styles.modeTabTextActive]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modeTab, mode === 'signup' && styles.modeTabActive]}
            onPress={() => setMode('signup')}
          >
            <Text style={[styles.modeTabText, mode === 'signup' && styles.modeTabTextActive]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formCard}>
          {mode === 'signup' && (
            <InputField label="Username" value={username} onChangeText={setUsername} placeholder="Your display name" />
          )}
          <InputField label="Email" value={email} onChangeText={setEmail} placeholder="you@email.com" keyboardType="email-address" />
          <InputField label="Password" value={password} onChangeText={setPassword} placeholder="••••••••" secureTextEntry />

          <TouchableOpacity
            style={[styles.submitBtn, loading && { opacity: 0.7 }]}
            onPress={handleSubmit}
            disabled={loading}
            activeOpacity={0.85}
          >
            <Text style={styles.submitBtnText}>{loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMode(mode === 'login' ? 'signup' : 'login')} style={styles.switchLink}>
            <Text style={styles.switchLinkText}>
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <Text style={{ color: GOLD, fontWeight: '700' }}>{mode === 'login' ? 'Sign Up' : 'Login'}</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.guestNote}>🎬 Login to write & edit reviews</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ─── Logged-In Profile ────────────────────────────────────────────────
function ProfileView({ navigation }) {
  const { user, logout } = useAuth();
  const { reviews, addReview, favorites, watchlist, clearReviews } = useFavorites();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editRating, setEditRating] = useState(0);

  const allMovies = [...favorites, ...watchlist];
  const reviewEntries = Object.entries(reviews).filter(([key]) => key.startsWith(`${user.username}:`));

  const startEdit = (movieId, review) => {
    setEditingId(movieId);
    setEditText(review.text || '');
    setEditRating(review.rating);
  };

  const saveEdit = async () => {
    if (editRating === 0) { Alert.alert('Please select a star rating'); return; }
    // editingId is the full key "username:movieId"
    const movieId = editingId.split(':').slice(1).join(':');
    const movie = allMovies.find(m => m.id === movieId);
    const title = movie?.title || reviews[editingId]?.movieTitle || 'Unknown';
    await addReview(movieId, editRating, editText, title, user.username);
    setEditingId(null);
    setEditText('');
    setEditRating(0);
    Alert.alert('✅ Review updated!');
  };

  const initial = user.username[0].toUpperCase();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
      {/* Profile hero */}
      <View style={styles.profileHero}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitial}>{initial}</Text>
        </View>
        <Text style={styles.profileName}>{user.username}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>

        <View style={styles.profileStats}>
          <View style={styles.pStat}>
            <Text style={[styles.pStatVal, { color: GOLD }]}>{favorites.length}</Text>
            <Text style={styles.pStatLabel}>Favorites</Text>
          </View>
          <View style={styles.pStatDiv} />
          <View style={styles.pStat}>
            <Text style={[styles.pStatVal, { color: '#42A5F5' }]}>{watchlist.length}</Text>
            <Text style={styles.pStatLabel}>Watchlist</Text>
          </View>
          <View style={styles.pStatDiv} />
          <View style={styles.pStat}>
            <Text style={[styles.pStatVal, { color: '#00E676' }]}>{reviewEntries.length}</Text>
            <Text style={styles.pStatLabel}>Reviews</Text>
          </View>
        </View>
      </View>

      {/* My Reviews */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✍️ My Reviews</Text>

        {reviewEntries.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>No reviews yet. Go to a movie and write one!</Text>
          </View>
        ) : (
          reviewEntries.map(([key, review]) => {
            // key format: "username:movieId"
            const movieId = key.split(':').slice(1).join(':');
            const movie = allMovies.find(m => m.id === movieId);
            const title = movie?.title || review.movieTitle || 'Unknown Movie';
            const isEditing = editingId === key;

            return (
              <View key={key} style={styles.reviewCard}>
                <View style={styles.reviewCardHeader}>
                  {movie?.poster && (
                    <Image source={{ uri: movie.poster }} style={styles.reviewPoster} resizeMode="cover" />
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={styles.reviewTitle} numberOfLines={1}>{title}</Text>
                    <Text style={{ color: GOLD, fontSize: 15, letterSpacing: 1 }}>
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </Text>
                    <Text style={styles.reviewDate}>{review.date}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => isEditing ? setEditingId(null) : startEdit(key, review)}
                    style={styles.editBtn}
                  >
                    <Text style={styles.editBtnText}>{isEditing ? 'Cancel' : '✏️ Edit'}</Text>
                  </TouchableOpacity>
                </View>

                {!isEditing && review.text ? (
                  <Text style={styles.reviewText}>{review.text}</Text>
                ) : null}

                {isEditing && (
                  <View style={styles.editForm}>
                    <StarPicker value={editRating} onChange={setEditRating} />
                    <TextInput
                      style={styles.editInput}
                      value={editText}
                      onChangeText={setEditText}
                      placeholder="Edit your review..."
                      placeholderTextColor="#444"
                      multiline
                      maxLength={300}
                    />
                    <TouchableOpacity style={styles.saveBtn} onPress={saveEdit}>
                      <Text style={styles.saveBtnText}>Save Changes</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            );
          })
        )}
      </View>

      {/* Clear review data */}
      <TouchableOpacity
        style={styles.clearBtn}
        onPress={() => Alert.alert(
          'Clear Review Data',
          'This will permanently delete all your stored reviews from this device. Are you sure?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Clear', style: 'destructive', onPress: async () => { await clearReviews(); Alert.alert('✅ Review data cleared!'); } },
          ]
        )}
        activeOpacity={0.85}
      >
        <Text style={styles.clearBtnText}>🗑 Clear All Review Data</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => Alert.alert('Logout', 'Are you sure?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Logout', style: 'destructive', onPress: logout },
        ])}
        activeOpacity={0.85}
      >
        <Text style={styles.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────
export default function ProfileScreen({ navigation }) {
  const { isLoggedIn } = useAuth();

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{isLoggedIn ? '👤 Profile' : '🔐 Account'}</Text>
        </View>
      </SafeAreaView>
      {isLoggedIn ? <ProfileView navigation={navigation} /> : <AuthForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  header: { paddingHorizontal: 20, paddingTop: 4, paddingBottom: 12 },
  headerTitle: { fontSize: 26, fontWeight: '900', color: '#FFF' },

  // Auth
  authScroll: { padding: 24, paddingBottom: 40 },
  authHero: { alignItems: 'center', paddingVertical: 24 },
  authLogo: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#111', borderWidth: 2, borderColor: GOLD, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  authTitle: { fontSize: 28, fontWeight: '900', color: GOLD, letterSpacing: 6, marginBottom: 8 },
  authSubtitle: { color: '#555', fontSize: 13, textAlign: 'center', lineHeight: 20 },

  modeTabs: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 14, padding: 4, marginBottom: 24 },
  modeTab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  modeTabActive: { backgroundColor: GOLD },
  modeTabText: { color: '#666', fontWeight: '700', fontSize: 14 },
  modeTabTextActive: { color: '#000', fontWeight: '800' },

  formCard: { backgroundColor: '#111', borderRadius: 20, padding: 20, gap: 4, borderWidth: 1, borderColor: '#1E1E1E' },
  inputWrap: { marginBottom: 14 },
  inputLabel: { color: '#888', fontSize: 12, fontWeight: '600', marginBottom: 6 },
  inputBox: { borderWidth: 1.5, borderRadius: 12, backgroundColor: '#0A0A0A' },
  input: { color: '#FFF', fontSize: 15, paddingHorizontal: 14, paddingVertical: 12 },

  submitBtn: { backgroundColor: GOLD, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  submitBtnText: { color: '#000', fontWeight: '800', fontSize: 15 },

  switchLink: { alignItems: 'center', marginTop: 12 },
  switchLinkText: { color: '#666', fontSize: 13 },

  guestNote: { textAlign: 'center', color: '#333', fontSize: 12, marginTop: 24 },

  // Profile
  profileHero: { alignItems: 'center', paddingVertical: 28, paddingHorizontal: 20 },
  avatarCircle: { width: 96, height: 96, borderRadius: 48, backgroundColor: '#1A1A1A', borderWidth: 2, borderColor: GOLD, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  avatarInitial: { fontSize: 42, fontWeight: '900', color: GOLD },
  profileName: { fontSize: 22, fontWeight: '900', color: '#FFF', marginBottom: 4 },
  profileEmail: { color: '#555', fontSize: 13, marginBottom: 18 },
  profileStats: { flexDirection: 'row', backgroundColor: '#111', borderRadius: 16, paddingVertical: 16, paddingHorizontal: 20, width: '100%', borderWidth: 1, borderColor: '#1E1E1E' },
  pStat: { flex: 1, alignItems: 'center' },
  pStatVal: { fontSize: 26, fontWeight: '900' },
  pStatLabel: { color: '#555', fontSize: 11, marginTop: 2 },
  pStatDiv: { width: 1, backgroundColor: '#222' },

  // Reviews
  section: { paddingHorizontal: 16, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#FFF', marginBottom: 14 },
  emptyBox: { backgroundColor: '#111', borderRadius: 14, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: '#1E1E1E' },
  emptyText: { color: '#555', fontSize: 13, textAlign: 'center', lineHeight: 20 },

  reviewCard: { backgroundColor: '#111', borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#1E1E1E' },
  reviewCardHeader: { flexDirection: 'row', gap: 12, marginBottom: 8, alignItems: 'flex-start' },
  reviewPoster: { width: 50, height: 72, borderRadius: 8 },
  reviewTitle: { color: '#FFF', fontWeight: '800', fontSize: 14, marginBottom: 4 },
  reviewDate: { color: '#555', fontSize: 11, marginTop: 2 },
  reviewText: { color: '#AAA', fontSize: 13, lineHeight: 20 },

  editBtn: { backgroundColor: '#1E1E1E', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: '#2A2A2A' },
  editBtnText: { color: GOLD, fontSize: 11, fontWeight: '700' },

  editForm: { gap: 10, marginTop: 10 },
  editInput: { backgroundColor: '#1A1A1A', borderRadius: 10, padding: 12, color: '#FFF', fontSize: 14, height: 80, textAlignVertical: 'top', borderWidth: 1, borderColor: '#2A2A2A' },
  saveBtn: { backgroundColor: GOLD, borderRadius: 10, paddingVertical: 10, alignItems: 'center' },
  saveBtnText: { color: '#000', fontWeight: '800', fontSize: 13 },

  logoutBtn: { marginHorizontal: 16, marginTop: 8, paddingVertical: 14, borderRadius: 12, borderWidth: 1, borderColor: '#333', alignItems: 'center' },
  logoutBtnText: { color: '#FF4444', fontWeight: '700', fontSize: 14 },
  clearBtn: { marginHorizontal: 16, marginTop: 8, marginBottom: 4, paddingVertical: 14, borderRadius: 12, borderWidth: 1, borderColor: '#2A2A2A', alignItems: 'center' },
  clearBtnText: { color: '#888', fontWeight: '600', fontSize: 13 },
});