const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { isAuthenticated, isVendor } = require('../middlewares/authMiddleware');

// Create a new halal product
router.post('/', isAuthenticated, isVendor, createProduct);

// Get all halal-certified products
router.get('/', getProducts);

module.exports = router;
