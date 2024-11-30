const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
 ordered_by:String,
 phone:String,
 ordered_at:Date,
 ordered_items:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
 total_price:Number,
 address:String,
 custom_print:String,
 status:String,
})

const Order = mongoose.model('orders',orderSchema);

module.exports = Order;