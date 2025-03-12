const express = require('express');
const router = express.Router();

// Addition route
router.get('/add', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }
    
    let sum = num1 + num2;
    res.status(200).json({ result: sum });
});

// Subtraction route
router.get('/subtract', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    let difference = num1 - num2;
    res.status(200).json({ result: difference });
});

// Multiplication route
router.get('/multiply', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    let product = num1 * num2;
    res.status(200).json({ result: product });
});

// Division route
router.get('/divide', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    // Handle division by zero
    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    let quotient = num1 / num2;
    res.status(200).json({ result: quotient });
});

module.exports = router;
