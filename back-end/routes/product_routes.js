const express = require('express');
const router = express.Router();
const { addProduct } = require('../controllers/product_controller');

router.post('/add_product', addProduct);

module.exports = router;