// app.js - new file at top level
const express = require('express')
const app = express()

// map all routes to the express app
const calculatorRoutes =
require('./routes/calculatorRoutes');
//middleware to parse incoming JSON requests
app.use(express.json());
app.use('/calculator', calculatorRoutes);
// export the app
module.exports = app;