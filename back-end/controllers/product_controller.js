const upload = require('../helper/image_uploader');
const Product = require('../models/product_model');


const addProduct = (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
  
        // Ensure the file and body data are available
        if (!req.files) {
            return res.status(400).json({ error: 'Missing image or description' });
        }
        // console.log(req.files.length);
        const images = []
        req.files.map((file) => {
            // console.log(file.filename);
            images.push(`product_image/${file.filename}`)
          });
        //   console.log(images)
  
        // Create a new Product instance with the uploaded data
        const newProduct = new Product({
            product_name: req.body.product_name, // Use filename directly from req.file
            product_description: req.body.product_description,
            product_images: images, 
            product_size:req.body.product_size,
            product_category:req.body.product_category,
            product_price:req.body.product_price,
            created_at:Date.now(),
        });
  
        newProduct.save()
            .then(() => res.json({ message: 'Successfully uploaded' }))
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: 'Failed to save product' });
            });
    });
  };
  
  module.exports = {
    addProduct,
  };