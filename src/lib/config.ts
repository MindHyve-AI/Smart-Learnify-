/**
 * Centralized configuration file for Smart Learnify
 * All application settings and constants should be defined here
 */

// Environment variables are accessed through next.config.ts

export const config = {
  // App settings
  app: {
    name: 'Smart Learnify',
    description: 'An AI-powered learning platform',
    defaultUrl: 'http://localhost:3000',
  },
  
  // API settings
  api: {
    defaultUrl: '/api',
    timeout: 10000,
  },
  
  // Feature flags
  features: {
    authentication: true,
    ai: true,
    notifications: true,
  },
  
  // Theme settings
  theme: {
    defaultTheme: 'system',
    availableThemes: ['light', 'dark', 'system'],
  },
  
  // Routes configuration
  routes: {
    home: '/',
    dashboard: '/dashboard',
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      forgot: '/auth/forgot-password',
    },
  },
}; 