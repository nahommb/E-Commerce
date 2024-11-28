const express = require('express');
const router = express.Router();
const { addProduct,getProducts, findProduct, searchProducts, getAllProducts,findRecentProducts } = require('../controllers/product_controller');


router.post('/add_products', addProduct);
router.get('/get_products/:category',getProducts);
router.get('/find_product/:id',findProduct)
router.post('/search_products',searchProducts);
router.get('/get_all_products',getAllProducts);
router.get('/get_recent_products',findRecentProducts);

module.exports = router;