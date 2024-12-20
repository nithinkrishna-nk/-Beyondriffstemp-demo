const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config/config');
const privacyRoutes = require('./routes/privacyRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use the privacy routes
app.use('/api/privacy', privacyRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
