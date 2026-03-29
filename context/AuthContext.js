import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { username, email, avatar (initial) }
  const [accounts, setAccounts] = useState({}); // { email: { username, password } }

  useEffect(() => {
    loadAuth();
  }, []);

  const loadAuth = async () => {
    try {
      const [userData, accountsData] = await Promise.all([
        AsyncStorage.getItem('auth_user'),
        AsyncStorage.getItem('auth_accounts'),
      ]);
      if (userData) setUser(JSON.parse(userData));
      if (accountsData) setAccounts(JSON.parse(accountsData));
    } catch (e) {}
  };

  const signUp = async (username, email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedUsername = username.trim();
    // Validation
    if (!trimmedUsername || trimmedUsername.length < 2)
      return { success: false, error: 'Username must be at least 2 characters.' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail))
      return { success: false, error: 'Please enter a valid email address.' };
    if (password.length < 6)
      return { success: false, error: 'Password must be at least 6 characters.' };
    if (accounts[trimmedEmail])
      return { success: false, error: 'An account with this email already exists.' };
    const updatedAccounts = { ...accounts, [trimmedEmail]: { username: trimmedUsername, password } };
    setAccounts(updatedAccounts);
    const newUser = { username: trimmedUsername, email: trimmedEmail };
    setUser(newUser);
    await AsyncStorage.setItem('auth_accounts', JSON.stringify(updatedAccounts));
    await AsyncStorage.setItem('auth_user', JSON.stringify(newUser));
    return { success: true };
  };

  const login = async (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();
    const account = accounts[trimmedEmail];
    if (!account) return { success: false, error: 'No account found with this email.' };
    if (account.password !== password) return { success: false, error: 'Incorrect password.' };
    const loggedInUser = { username: account.username, email: trimmedEmail };
    setUser(loggedInUser);
    await AsyncStorage.setItem('auth_user', JSON.stringify(loggedInUser));
    return { success: true };
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('auth_user');
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);