// server.js (Vercel-ready)
const mongoose = require('mongoose');
const app = require('./app');

// MongoDB connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
  }
}

connectToMongoDB();

// Do NOT use app.listen() on Vercel
// Export the app for Vercel serverless functions
module.exports = app;
