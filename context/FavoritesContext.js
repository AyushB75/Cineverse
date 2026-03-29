import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [favData, watchData, reviewData] = await Promise.all([
        AsyncStorage.getItem('favorites'),
        AsyncStorage.getItem('watchlist'),
        AsyncStorage.getItem('reviews'),
      ]);
      if (favData) setFavorites(JSON.parse(favData));
      if (watchData) setWatchlist(JSON.parse(watchData));
      if (reviewData) setReviews(JSON.parse(reviewData));
    } catch (e) {}
  };

  const toggleFavorite = async (movie) => {
    const exists = favorites.find(f => f.id === movie.id);
    const updated = exists
      ? favorites.filter(f => f.id !== movie.id)
      : [...favorites, movie];
    setFavorites(updated);
    await AsyncStorage.setItem('favorites', JSON.stringify(updated));
  };

  const toggleWatchlist = async (movie) => {
    const exists = watchlist.find(w => w.id === movie.id);
    const updated = exists
      ? watchlist.filter(w => w.id !== movie.id)
      : [...watchlist, movie];
    setWatchlist(updated);
    await AsyncStorage.setItem('watchlist', JSON.stringify(updated));
  };

  const addReview = async (movieId, rating, text, movieTitle, username) => {
    const key = `${username}:${movieId}`;
    const updated = {
      ...reviews,
      [key]: { rating, text, movieTitle, username, date: new Date().toLocaleDateString() },
    };
    setReviews(updated);
    await AsyncStorage.setItem('reviews', JSON.stringify(updated));
  };

  const clearReviews = async () => {
    setReviews({});
    await AsyncStorage.removeItem('reviews');
  };

  const isFavorite = (id) => favorites.some(f => f.id === id);
  const isInWatchlist = (id) => watchlist.some(w => w.id === id);
  const getReview = (movieId, username) => {
    if (!username) return null;
    return reviews[`${username}:${movieId}`] || null;
  };

  return (
    <FavoritesContext.Provider value={{
      favorites, watchlist, reviews,
      toggleFavorite, toggleWatchlist, addReview, clearReviews,
      isFavorite, isInWatchlist, getReview,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);