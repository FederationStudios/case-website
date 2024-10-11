const express = require('express');
const mongoose = require('mongoose');
const Case = require('./DBModels/Case');
const config = require('./config.json');
const { decryptData } = require('./utils/encryptionUtils'); // Assume decryption utility

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
        const searchQuery = req.query.search || '';
        
        // Find cases that match the search query
        const cases = await Case.find({
            $or: [
                { case_id: { $regex: searchQuery, $options: 'i' } }, // Search by Case ID
                { 'case_status': { $regex: searchQuery, $options: 'i' } } // Assuming you have a field for submitter's name
            ]
        });

        // Filter the cases to exclude sensitive information
        const filteredCases = cases.map(caseItem => ({
            case_id: caseItem.case_id,
            offense: caseItem.offenses_adjudicated,
            division: caseItem.division,
            case_status: caseItem.case_status,
            judges_assigned: caseItem.judges_assigned,
            judges_username: caseItem.judges_username,
            submission_date: caseItem.submission_date,
        }));

        res.render('index', { cases: filteredCases });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
