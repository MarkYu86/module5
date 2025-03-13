// routes/calculatorRoutes.js

const express = require('express');
const router = express.Router();

// Import the controller
const calculatorController = require('../controller/calculatorController');

// Addition route
router.get('/add', calculatorController.add);

// Subtraction route
router.get('/subtract', calculatorController.subtract);

// Multiplication route
router.get('/multiply', calculatorController.multiply);

// Division route
router.get('/divide', calculatorController.divide);

module.exports = router;
