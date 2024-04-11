// IMPORTING DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const db = require('./config/mongoose');

// INITIALIZE EXPRESS AND PORT SETUP
const app = express();
const PORT = 3000;

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use('/products', productRoutes);

// Starting the Server
app.listen(PORT, () => {
  console.log(`API is live on http://localhost:${PORT}/products`);
});
