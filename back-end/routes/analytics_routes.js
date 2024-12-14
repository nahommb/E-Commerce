const express = require('express');
const { numberOfUsers,numberOfProductsSold, deliverdAndNotDeliverd } = require('../controllers/analytics_controller');
const router = express.Router();

router.get('/number_of_new_users',numberOfUsers);
router.get('/number_of_products_sold',numberOfProductsSold);
router.get('/number_of_orders_delivered',deliverdAndNotDeliverd);
module.exports = router;