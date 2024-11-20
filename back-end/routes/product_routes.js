const express = require('express');
const router = express.Router();
const { addProduct,getProducts, findProduct } = require('../controllers/product_controller');


router.post('/add_products', addProduct);
router.get('/get_products/:category',getProducts);
router.get('/find_product/:id',findProduct)

module.exports = router;