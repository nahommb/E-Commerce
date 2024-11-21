const express = require('express');
const router = express.Router();
const { addProduct,getProducts, findProduct, searchProducts, getAllProducts } = require('../controllers/product_controller');


router.post('/add_products', addProduct);
router.get('/get_products/:category',getProducts);
router.get('/find_product/:id',findProduct)
router.post('/search_products',searchProducts);
router.get('/get_all_products',getAllProducts);

module.exports = router;