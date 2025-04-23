const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const contactRoutes = require('./src/routes/contactRoutes');

// Initialize express app
const app = express();

// Middleware
// app.use(cors());
// const corsOptions = {
//   origin: [
//     'http://localhost:5173', // for development
//     'https://hubspot-frontend.onrender.com' // for production
//   ],
//   credentials: true,
// };
const cors = require("cors");

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://hubspot-frontend.onrender.com"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
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