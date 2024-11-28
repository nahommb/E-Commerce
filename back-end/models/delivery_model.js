const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    name:String,
    delivery_price :String,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;