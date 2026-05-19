# 🎬 CINÉVERSE

> A Cinematic movie discovery app built with React Native & Expo

![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey?style=flat-square)
![Built With](https://img.shields.io/badge/built%20with-React%20Native-61DAFB?style=flat-square&logo=react)
![Expo](https://img.shields.io/badge/expo-compatible-000020?style=flat-square&logo=expo)

---
## 📸 Screenshots

| Login | Home | Search |
|-------|------|--------|
| ![Login](assets/screenshots/Login%20Screen.jpg) | ![Home](assets/screenshots/Home%20Screen.jpg) | ![Search](assets/screenshots/Search%20Screen.jpg) |

| Details | Favourites | Cast Profile |
|---------|------------|--------------|
| ![Details](assets/screenshots/Details%20Screen.jpg) | ![Favourites](assets/screenshots/Favourites%20Screen.jpg) | ![Cast](assets/screenshots/Cast%20Profile%20Screen.jpg) |

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🏠 **Home Page** | Curated movie sections with animated hero carousel |
| 🔍 **Smart Search** | Filter by language, sort by rating/year, search cast & directors |
| 🎭 **Cast Profiles** | Tap any cast member to see their full filmography |
| ❤️ **Favorites & Watchlist** | Persist your picks across sessions with AsyncStorage |
| ✍️ **Reviews** | Write, edit, and view reviews per movie — survives logout |
| 👤 **Auth System** | Sign up / login with local persistence, full form validation |
| 🎬 **Splash Screen** | Animated logo with zoom-out transition |
| 🌑 **Dark Theme** | Deep black UI with royal gold accent (`#C9A84C`) throughout |

---

## 📁 Project Structure

```
cineverse/
├── App.js                        # Root navigator, splash screen, tab setup
├── screens/
│   ├── HomeScreen.js             # Hero carousel + movie sections
│   ├── SearchScreen.js           # Search, filter, sort
│   ├── DetailScreen.js           # Movie detail, reviews, cast, recommendations
│   ├── CastScreen.js             # Cast member profile + filmography
│   ├── FavoritesScreen.js        # Favorites & watchlist tabs
│   └── ProfileScreen.js          # Auth forms + user profile + review management
├── context/
│   ├── AuthContext.js            # Signup/login/logout + AsyncStorage persistence
│   └── FavoritesContext.js       # Favorites, watchlist, reviews state
└── data/
    └── movies.js                 # Local movie dataset (add your own!)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your phone, or an iOS/Android simulator

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cineverse.git
cd cineverse

# Install dependencies
npm install

# Start the dev server
npx expo start
```

Then scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).

### Dependencies

```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npm install react-native-safe-area-context react-native-screens
npm install @react-native-async-storage/async-storage
npx expo install expo-status-bar
```

---

## 🗂️ Data Format

Movies live in `data/movies.js`. Each entry follows this shape:

```js
{
  id: 'unique-id',
  title: 'Movie Title',
  year: 2024,
  duration: '2h 30m',
  language: 'Hindi',          // Used by language filter
  director: 'Director Name',
  rating: 8.5,                // Out of 10
  poster: 'https://...',      // Poster image URL
  backdrop: 'https://...',    // Hero backdrop URL (falls back to poster)
  description: 'Synopsis...',
  genre: ['Action', 'Drama'], // Array — used for tags & recommendations
  tags: ['must-watch'],       // Optional hashtag chips
  keywords: ['bollywood'],    // Used for keyword search
  cast: [
    { name: 'Actor Name', role: 'Character', photo: 'https://...' }
  ],
  reviews: [
    { user: 'username', rating: 4, text: 'Great film!', date: '1/1/2024' }
  ]
}
```

---

## 🐛 Bug Fixes (v1.1)

- **Tags navigation crash** — Genre/tag chips on Detail screen now correctly navigate through the nested Tab navigator to Search (`Tabs → Search`)
- **Reviews lost on logout** — Reviews are now read directly from the `reviews` store and displayed regardless of login state; `isOwn` flag is set only for the current user
- **Missing signup validation** — `AuthContext.signUp` now validates: username length, email format (regex), password min length (6), and duplicate email
- **Infinite re-render on Favorites screen** — Fixed unstable dependency in `useEffect` causing continuous re-renders while updating favorites
- **Broken image fallback handling** — Added default placeholder images when poster/API image URLs fail to load
- **Duplicate review submissions** — Review submit button is now disabled during async requests to prevent duplicate entries
- **Session persistence issue** — Authentication state now restores correctly after app restart using persisted local storage
---


## 🛠️ Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation v6](https://reactnavigation.org/)
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)

---

## 📄 License

MIT © [Ayush Bansal](https://github.com/AyushB75)
