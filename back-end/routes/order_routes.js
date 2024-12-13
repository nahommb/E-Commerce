const express = require('express');
const router = express.Router();

const {createOrder,getOrders,assignDelivery,readyOrders,deliverd} = require('../controllers/order_controller');
const { isAdmin, isAdminAuth } = require('../middleware/auth_middleware');



router.post('/create_order',createOrder)
router.get('/get_orders',isAdminAuth,getOrders)
router.put('/assign_delivery/:orderId',isAdminAuth,assignDelivery)
router.get('/ready_orders',isAdminAuth,readyOrders)
router.put('/deliverd/:orderId',isAdminAuth,deliverd)

module.exports = router