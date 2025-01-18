const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory data storage (replace with a real database later)
let playerData = {};

// API Endpoints

// Save Data
app.post('/api/save', (req, res) => {
    const { playerId, data } = req.body;

    if (!playerId || !data) {
        return res.status(400).json({ error: "Invalid request data." });
    }

    // Save data (use a real database in production)
    playerData[playerId] = data;
    console.log(`Data saved for playerId: ${playerId}`);
    res.json({ success: true });
});

// Load Data
app.post('/api/load', (req, res) => {
    const { playerId } = req.body;

    if (!playerId) {
        return res.status(400).json({ error: "Invalid request data." });
    }

    const data = playerData[playerId] || {};
    console.log(`Data loaded for playerId: ${playerId}`);
    res.json({ success: true, data });
});

// Start the server
const PORT = 3000; // Change if needed
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
