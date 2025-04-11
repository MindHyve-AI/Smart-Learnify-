import React, { createContext, useState, useContext, useEffect } from 'react';
import { registerUser, loginUser, getCurrentUser } from '../services/api';

// Create context
const AuthContext = createContext(null);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  useEffect(() => {
    // If we have a token, try to get the current user
    const fetchUser = async () => {
      if (token) {
        try {
          const userData = await getCurrentUser(token);
          setCurrentUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
          // If there's an error, clear the token and user
          localStorage.removeItem('authToken');
          setToken(null);
          setCurrentUser(null);
        }
      }
      setLoading(false);
    };
    
    fetchUser();
  }, [token]);

  // Sign up function
  const signUp = async (email, password, firstName, lastName) => {
    try {
      const userData = await registerUser({ email, password, firstName, lastName });
      setCurrentUser(userData);
      
      // In a full implementation, registerUser would return a token
      // For now, we'll just store the user
      localStorage.setItem('user', JSON.stringify(userData));
      
      return userData;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  // Sign in function
  const signIn = async (email, password) => {
    try {
      const data = await loginUser({ email, password });
      setCurrentUser(data);
      
      // In a full implementation, loginUser would return a token
      // For now, we'll just store the user
      localStorage.setItem('user', JSON.stringify(data));
      
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  // Sign out function
  const signOut = () => {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    return Promise.resolve();
  };

  const value = {
    currentUser,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext; 