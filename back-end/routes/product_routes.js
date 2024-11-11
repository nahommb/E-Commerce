const express = require('express');
const router = express.Router();
const { addProduct,getProducts } = require('../controllers/product_controller');


router.post('/add_product', addProduct);
router.get('/get_products/:category',getProducts);

module.exports = router;