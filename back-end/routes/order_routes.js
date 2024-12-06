const express = require('express');
const router = express.Router();

const {createOrder,getOrders} = require('../controllers/order_controller');
const { isAdmin, isAdminAuth } = require('../middleware/auth_middleware');



router.post('/create_order',createOrder)
router.get('/get_orders',isAdminAuth,getOrders)

module.exports = router