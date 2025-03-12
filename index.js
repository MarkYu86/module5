const express = require('express');
const app1 = express();
const app2 = express();

// Middleware to serve static content from the "public" directory
app1.use('/', express.static('public'));
app2.use('/', express.static('public'));

// Import the routes from myTestRoutes.js
const testRoutes = require('./routes/myTestRoutes');

// Bind the routes to the /mytest prefix
app1.use('/mytest', testRoutes);
app2.use('/mytest', testRoutes);

// Server 1 on port 3000
const port1 = 3000;
app1.listen(port1, () => {
  console.log(`Server 1 listening at http://localhost:${port1}`);
});

// Server 2 on port 4000
const port2 = 4000;
app2.listen(port2, () => {
  console.log(`Server 2 listening at http://localhost:${port2}`);
});
