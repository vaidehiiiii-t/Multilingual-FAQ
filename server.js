const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');
const path = require('path'); // To serve static files
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the FAQ routes for API endpoints
app.use('/api', faqRoutes);
app.use('/api/faqs', faqRoutes);
app.get('/display', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'display.html'));
});

// Catch-all route for serving the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
