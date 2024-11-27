const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
 ordered_by:String,
 ordered_at:Date,
 ordered_items:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
 total_price:Number,
 status:String,
})

const Order = mongoose.model('orders',orderSchema);

module.exports = Order;