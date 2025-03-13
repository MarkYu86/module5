// controllers/myTestController.js

const test = (req, res) => {
    res.send('Hello World!');
  };
  
  const test2 = (req, res) => {
    res.send('Second test');
  };
  
  module.exports = { test, test2 };
  