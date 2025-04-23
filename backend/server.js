// const express = require('express')
// const cors = require('cors');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// // Import routes
// const contactRoutes = require('./src/routes/contactRoutes');

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/contacts', contactRoutes);

// // Default route
// app.get('/', (req, res) => {
//   res.send('ProStruct Engineering Directory API is running!');
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./src/routes/contactRoutes');

// Initialize express app
const app = express();

// Improved CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',  // Your local frontend development server
    'https://hubspot-frontend.onrender.com', // Your production frontend
    // Add any other origins that need access
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('ProStruct Engineering Directory API is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});