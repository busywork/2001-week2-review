/*
  My main server file.  This is the file that gets run by nodemon.
*/
// Add imports for npm
const express = require('express');
const morgan = require('morgan');

// Add imports for my own files
const apiRoutes = require('./routes/api');

// Create new express server
const app = express();

// Top-Level Middleware
app.use(morgan('dev')); // for logging

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* for req.body */

// Routes
app.use('/api', apiRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err); // for us devs
  res.status(500).send('Internal Server Error'); // for the client
});

// 404 - Catches any routes not specified above
app.use((req, res) => {
  res.status(404).send('Not Found.');
});

// Start App
const PORT = 4000;
app.listen(PORT, () => console.log('Server Started!  🐒'));
