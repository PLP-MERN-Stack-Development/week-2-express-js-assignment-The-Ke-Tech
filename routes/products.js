const express = require('express');

const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');

const { v4: uuidv4 } = require('uuid');

const logger = require('../middleware/logger');        
const auth = require('../middleware/auth');            
const validateProduct = require('../middleware/validateProduct'); 

const router = express.Router();

// In-memory product array
let products = [];

// Apply middleware
router.use(logger);
router.use(auth);

// ROUTES BELOW...

// GET all products
router.get('/', (req, res) => {
  const { category, search, page = 1, limit = 10 } = req.query;

  let filteredProducts = [...products];

  // 🔍 Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 🔎 Search by name
  if (search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 📄 Pagination
  const start = (parseInt(page) - 1) * parseInt(limit);
  const end = start + parseInt(limit);
  const paginatedProducts = filteredProducts.slice(start, end);

  res.json({
    total: filteredProducts.length,
    page: parseInt(page),
    limit: parseInt(limit),
    results: paginatedProducts
  });
});

// POST create new product
router.post('/', validateProduct, (req, res) => { 
  const { name, description, price, category, inStock } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    category,
    inStock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', validateProduct, (req, res) => { 
  const index = products.findIndex(p => p.id === req.params.id);
 if (!product) {
  throw new NotFoundError('Product not found');
}


  const { name, description, price, category, inStock } = req.body;
  products[index] = {
    ...products[index],
    name,
    description,
    price,
    category,
    inStock
  };

  res.json(products[index]);
});


router.get('/stats/category', (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  res.json(stats);
});


// DELETE product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
if (!product) {
  throw new NotFoundError('Product not found');
}

  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: deleted[0] });
});

module.exports = router;
