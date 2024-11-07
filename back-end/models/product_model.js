const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    product_name: {
        type: String,
        required: true,
    },
    price:{
        type:String,
         required:true
    },
    product_description:{
            type:String,
        },
    product_size:{
            type:String,
            required:true
        },
    product_images:{
            type:[String],
            required:true
        },
    product_category:{
            type:String,
            required:true
        },
    created_at:{
            type:Date
        },
    updated_at:{
            type:Date
        }
});
const Product = mongoose.model('products', productSchema);
module.exports = Product;