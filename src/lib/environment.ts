/**
 * Environment utilities for safely accessing environment variables
 */

// Helper to safely get environment variable values
export const getEnv = (key: string, defaultValue: string = ''): string => {
  if (typeof window !== 'undefined') {
    // Client-side - only access NEXT_PUBLIC_ variables
    if (key.startsWith('NEXT_PUBLIC_')) {
      return (window as any).__ENV__?.[key] || defaultValue;
    }
    return defaultValue;
  }
  
  // Server-side - can access any environment variable
  return process.env[key] || defaultValue;
};

// App environments
export const isProduction = (): boolean => getEnv('NODE_ENV') === 'production';
export const isDevelopment = (): boolean => getEnv('NODE_ENV') === 'development';
export const isTest = (): boolean => getEnv('NODE_ENV') === 'test';

// Common environment variables
export const getAppUrl = (): string => getEnv('NEXT_PUBLIC_APP_URL', 'http://localhost:3000');
export const getApiUrl = (): string => getEnv('NEXT_PUBLIC_API_URL', '/api'); 