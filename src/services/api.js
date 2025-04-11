// API service for user authentication and data fetching

// Base API URL - use environment variable if available, otherwise fallback to localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

/**
 * Register a new user
 * @param {Object} userData - User data including email, password, firstName, lastName
 * @returns {Promise} Promise that resolves to the user data
 */
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

/**
 * Login a user
 * @param {Object} credentials - User credentials including email and password
 * @returns {Promise} Promise that resolves to the user data and token
 */
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

/**
 * Get current user profile
 * @param {string} token - JWT token
 * @returns {Promise} Promise that resolves to the user profile data
 */
export const getCurrentUser = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Get current user error:', error);
    throw error;
  }
};

/**
 * Update user profile
 * @param {string} token - JWT token (optional for now)
 * @param {Object} userData - Updated user data (firstName, lastName, email)
 * @returns {Promise} Promise that resolves to the updated user data
 */
export const updateUserProfile = async (token, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // In a real app with JWT auth, you would include this:
        // 'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Check if response is JSON before trying to parse it
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      } else {
        // Handle non-JSON error responses
        const errorText = await response.text();
        console.error('Non-JSON error response:', errorText);
        throw new Error('Server error: Failed to update profile');
      }
    }

    // Check if the response is JSON before parsing
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      console.error('Unexpected non-JSON response');
      throw new Error('Unexpected response format from server');
    }
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
}; 