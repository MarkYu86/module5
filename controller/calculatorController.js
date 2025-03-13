// controllers/calculatorController.js

const add = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }
    
    let sum = num1 + num2;
    res.status(200).json({ result: sum });
};

const subtract = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    let difference = num1 - num2;
    res.status(200).json({ result: difference });
};

const multiply = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    let product = num1 * num2;
    res.status(200).json({ result: product });
};

const divide = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Both num1 and num2 must be valid numbers" });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    let quotient = num1 / num2;
    res.status(200).json({ result: quotient });
};

module.exports = { add, subtract, multiply, divide };
