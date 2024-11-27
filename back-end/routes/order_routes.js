const express = require('express');
const router = express.Router();

const createOrder = require('../controllers/order_controller');


router.post('/create_order',createOrder)

module.exports = router