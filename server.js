const express = require('express');
const mongoose = require('mongoose');
const Case = require('./DBModels/Case');
const config = require('./config.json');

const app = express();

// Middleware to serve static files
app.use(express.static('public'));

// Set view engine to EJS
app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect(config.mongodbUri)
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

// Route to render cases
app.get('/', async (req, res) => {
    try {
        const cases = await Case.find();
        res.render('index', { cases });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
