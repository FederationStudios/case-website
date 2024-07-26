const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const config = require('./config.json')

// Initialize Express
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB
mongoose.connect(config.mongodbUri)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Load Case model
const Case = require('./DBModels/Case');

// Route to list cases
app.get('/', async (req, res) => {
  try {
    const cases = await Case.find();
    res.render('index', { cases });
  } catch (error) {
    console.error('Error fetching cases:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
