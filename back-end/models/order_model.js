const mongoose = require('mongoose');

const orderedItemSchema = new mongoose.Schema({
  product_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  custom_print:{
    type:String
  }
}, { _id: false }); // Disable _id for each subdocument if not needed

const orderSchema = new mongoose.Schema({
  ordered_by: String,
  phone: String,
  ordered_at: Date,
  ordered_items: [orderedItemSchema],
  total_price: Number,
  address: String,
  custom_print: String,
  status: String,
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
