const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


// Create two separate Express app instances
const app1 = express();
const app2 = express();
const app = express();  // This is the main app for calculator routes
const app3 = require('./app');


// Middleware to serve static content from the "public" directory for both apps
app1.use('/', express.static('public'));
app2.use('/', express.static('public'));
app.use('/', express.static('public')); // Main app serves static files too
// Middleware to parse JSON requests (added above routes)
app.use(express.json()); // This should be above route mappings

// Import routes
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');
// import all user routes (up top in index.js)
const userRoutes = require('./routes/userRoutes');

// Bind the routes to the /mytest prefix for both servers
app1.use('/mytest', testRoutes);
app2.use('/mytest', testRoutes);

// Bind the calculator routes to the /calculator prefix for the main app
app.use('/calculator', calculatorRoutes);
app.use('/users', userRoutes);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
  );

// Server 1 on port 8080
const port1 = 8080;
app1.listen(port1, (err) => {
  if (err) {
    console.error(`Error starting Server 1 on port ${port1}:`, err);
  } else {
    console.log(`Server 1 listening at http://localhost:${port1}`);
  }
});

// Server 2 on port 4000
const port2 = 4000;
app2.listen(port2, (err) => {
  if (err) {
    console.error(`Error starting Server 2 on port ${port2}:`, err);
  } else {
    console.log(`Server 2 listening at http://localhost:${port2}`);
  }
});

// Main app for calculator routes on port 5000 (or any port of your choice)
const port = 5000;
app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting Main App on port ${port}:`, err);
  } else {
    console.log(`Calculator App running at http://localhost:${port}`);
  }
});
//port for API Test
const port3 = 6000
app3.listen(port3, () => {
  console.log(`Example app listening at
  http://localhost:${port}`)
  })