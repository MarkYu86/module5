const Calculator = require("../lib/calculatorLib");

const add = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        const errorMsg = "Both num1 and num2 must be valid numbers";
        // logger.logger("Add operation failed", errorMsg);  // Log the failure
        return res.status(400).json({ error: errorMsg });

    }
    
    const result = Calculator.add(num1, num2);
    const id = Calculator.randomId();
    // logger.logger("add is good", `ID: ${id}, Result: ${result}`);
  res.status(200).json({ result, id});
};

const subtract = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        const errorMsg = "Both num1 and num2 must be valid numbers";
        // logger.logger("Subtract operation failed", errorMsg);  // Log the failure
        return res.status(400).json({ error: errorMsg });
    }

    const result = Calculator.subtract(num1, num2);
    const id = Calculator.randomId();
    // logger.logger("Subtract is good", `ID: ${id}, Result: ${result}`);
    res.status(200).json({result,id});
};

const multiply = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        const errorMsg = "Both num1 and num2 must be valid numbers";
        // logger.logger("Multiply operation failed", errorMsg);  // Log the failure
        return res.status(400).json({ error: errorMsg });
    }

    const result = Calculator.multiply(num1, num2);
    const id = Calculator.randomId();
    // logger.logger("Multiply is good", `ID: ${id}, Result: ${result}`);
    res.status(200).json({result,id});
};

const divide = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        const errorMsg = "Both num1 and num2 must be valid numbers";
        // logger.logger("Divide operation failed", errorMsg);  // Log the failure
        return res.status(400).json({ error: errorMsg });
    }

    try {
        const result = Calculator.divide(num1, num2);
        const id = Calculator.randomId();
        // logger.logger("Divide is good", `ID: ${id}, Result: ${result}`);
        res.status(200).json({result,id});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};
module.exports = { add, subtract, multiply, divide };
