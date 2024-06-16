// Import the required modules
const express = require('express');
const fetch = require('node-fetch');

// Initialize the Express application
const app = express();

// Define the port on which the server will run
const port = 3000;

// API key for accessing the NewsAPI service
const apiKey = '84324d55e6014fdd8c09f3a90ebd33df';

/**
 * Endpoint to fetch news headlines
 * URL format: /news?category=<category>&pageSize=<pageSize>
 * Default category: 'general'
 * Default pageSize: 5
 */
app.get('/news', async (req, res) => {
    // Get the 'category' and 'pageSize' query parameters with defaults
    const category = req.query.category || 'general';
    const pageSize = req.query.pageSize || 5;

    // Construct the URL for the NewsAPI request
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;

    try {
        // Fetch data from NewsAPI
        const response = await fetch(url);

        // Parse the JSON response
        const data = await response.json();

        // Return the data as JSON
        res.json(data);
    } catch (error) {
        // Handle any errors by returning a 500 status with an error message
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
