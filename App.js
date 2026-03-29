import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import { useRef, useEffect, useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CastScreen from './screens/CastScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const GOLD = '#C9A84C';
const BG = '#0A0A0A';

// ─── Splash Screen ───────────────────────────────────────────────────
function SplashScreen({ onDone }) {
  const scale = useRef(new Animated.Value(0.3)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      // Fade + scale in
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.spring(scale, { toValue: 1, tension: 60, friction: 8, useNativeDriver: true }),
      ]),
      // Hold
      Animated.delay(800),
      // Zoom in and fade out
      Animated.parallel([
        Animated.timing(scale, { toValue: 4, duration: 500, easing: Easing.in(Easing.cubic), useNativeDriver: true }),
        Animated.timing(fadeOut, { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start(() => onDone());
  }, []);

  return (
    <Animated.View style={{
      flex: 1, backgroundColor: BG,
      alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut,
    }}>
      <Animated.View style={{ transform: [{ scale }], opacity, alignItems: 'center' }}>
        {/* Logo circle */}
        <View style={{
          width: 120, height: 120, borderRadius: 60,
          backgroundColor: '#111', borderWidth: 2, borderColor: GOLD,
          alignItems: 'center', justifyContent: 'center', marginBottom: 24,
        }}>
          <Text style={{ fontSize: 52 }}>🎬</Text>
        </View>

        <Text style={{
          fontSize: 36, fontWeight: '900', color: GOLD,
          letterSpacing: 8, textAlign: 'center',
        }}>CINÉVERSE</Text>
        <Text style={{
          fontSize: 11, color: '#555', letterSpacing: 4,
          marginTop: 6, textAlign: 'center',
        }}>YOUR MOVIE UNIVERSE</Text>
      </Animated.View>
    </Animated.View>
  );
}

// ─── Tab Icon ─────────────────────────────────────────────────────────
function TabIcon({ name, focused }) {
  const icons = {
    Home: focused ? '🎬' : '🏠',
    Search: focused ? '🔍' : '🔎',
    MyList: focused ? '❤️' : '🤍',
    Profile: focused ? '👤' : '🧑',
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22 }}>{icons[name]}</Text>
      <Text style={{
        fontSize: 9, color: focused ? GOLD : '#555',
        fontWeight: focused ? '700' : '400', marginTop: 2,
      }}>{name}</Text>
    </View>
  );
}

// ─── Home Stack (needed to fix nested navigation for tags) ───────────
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
    </Stack.Navigator>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopColor: '#222',
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} /> }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Search" focused={focused} /> }}
      />
      <Tab.Screen
        name="MyList"
        component={FavoritesScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="MyList" focused={focused} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ focused }) => <TabIcon name="Profile" focused={focused} /> }}
      />
    </Tab.Navigator>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────
export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  if (!splashDone) {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SplashScreen onDone={() => setSplashDone(true)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Tabs" component={Tabs} />
              <Stack.Screen name="Detail" component={DetailScreen} />
              <Stack.Screen name="Cast" component={CastScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}