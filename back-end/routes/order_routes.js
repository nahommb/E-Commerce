const express = require('express');
const router = express.Router();

const {createOrder,getOrders} = require('../controllers/order_controller');



router.post('/create_order',createOrder)
router.get('/get_orders',getOrders)

module.exports = router