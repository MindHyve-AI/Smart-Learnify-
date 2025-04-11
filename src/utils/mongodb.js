import mongoose from 'mongoose';

// Define connection state
const connection = {
  isConnected: false
};

/**
 * Connect to MongoDB database
 */
export async function connectToDatabase() {
  // If already connected, return
  if (connection.isConnected) {
    return;
  }

  // Get MongoDB URI from environment variables
  const MONGODB_URI = process.env.MONGODB_URI;

  // Validate MongoDB URI
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  try {
    // Connect to database
    const db = await mongoose.connect(MONGODB_URI);
    
    // Set connection status using mongoose's readyState
    connection.isConnected = db.connection.readyState === 1;
    
    console.log('MongoDB connected successfully');
    return db;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

/**
 * Disconnect from MongoDB database (useful for testing)
 */
export async function disconnectFromDatabase() {
  if (process.env.NODE_ENV === 'production' && connection.isConnected) {
    await mongoose.disconnect();
    connection.isConnected = false;
    console.log('MongoDB disconnected');
  }
} 