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

    created_at:{
            type:Date
        },
    product_image:{
            type:String,
            required:true

        },
    product_category:{
            type:String,
            required:true
        }
    
});