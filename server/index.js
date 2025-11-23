const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/test', require('./routes/testRoutes'));
app.use('/api/menu', require('./routes/menuRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'My Café API Server is running!',
    status: 'success'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

