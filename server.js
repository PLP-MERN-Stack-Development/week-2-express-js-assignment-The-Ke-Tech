const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const errorHandler = require('./middleware/errorHandler');

// Add after all routes
app.use(errorHandler);
