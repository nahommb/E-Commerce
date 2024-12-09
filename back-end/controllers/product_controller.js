const { deleteFile } = require('../helper/delete_image');
const upload = require('../helper/image_uploader');
const Product = require('../models/product_model');
const path = require('path');

const addProduct = (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }
  
        if (!req.files) {
            return res.status(400).json({ error: 'Missing image or description' });
        }
       
        const images = []
        req.files.map((file) => {
           
            images.push(`product_image/${file.filename}`)
          });
     
  
        const newProduct = new Product({
            product_name: req.body.product_name, 
            product_description: req.body.product_description,
            product_images: images.reverse(), 
            // product_size:req.body.product_size,
            custom_print:req.body.custom_print,
            product_category:req.body.product_category,
            price:req.body.price,
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
  

const getProducts = async (req, res) => {

   const page = parseInt(req.query.page) || 1;
   const limit =  parseInt(req.query.limit) || 10;
   const category = req.params.category;
  
   console.log(category);

   const skip = (page - 1) * limit; //0 3
   const lastIndex = page * limit; //3 6
   
   if(category === 'all'){
    const products = await Product.find().skip(skip).limit(limit);
    const totalItems = await Product.countDocuments();
    let nextPage = 1;
    let prevPage = totalItems;

    if(lastIndex < totalItems){
      nextPage = page + 1;
     }
     if(skip > 0){
       prevPage = page - 1;
       prevPage = totalItems;
     }
   
      res.json({
       current_page: page,
       total_pages: Math.ceil(totalItems / limit),
       next_page: nextPage,
       prev_page: prevPage,
       total_items:totalItems,
       products,
   });
  }
   else{
   const products = await Product.find({product_category:category}).skip(skip).limit(limit);
   const totalItems = await Product.countDocuments({ product_category: category });
    let nextPage = 1;
    let prevPage = totalItems;

  if(lastIndex < totalItems){
   nextPage = page + 1;
  }
  if(skip > 0){
    prevPage = page - 1;
    prevPage = totalItems;
  }

   res.json({
    current_page: page,
    total_pages: Math.ceil(totalItems / limit),
    next_page: nextPage,
    prev_page: prevPage,
    total_items:totalItems,
    products,
});
}
}

 
const findProduct = async(req,res)=>{

  const id = req.params.id

  console.log(id)
try{

  await Product.findById(id).exec().then((product)=>{
    if(product){
      res.status(200).json(product)
    }
    else{
      res.status(404).json({message:'Product not found'})
    }
  })
}
catch(err){
  console.log(err)
}
}
const searchProducts = async (req, res) => {
  const search = req.query.search; 
  console.log("Search query:", search);

  if (!search) {
      return res.status(400).json({ message: 'Search term is required.' });
  }

  try {
      const products = await Product.find({ product_name: { $regex: search, $options: 'i' } });
      res.json(products);
      console.log(products);
  } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: 'Internal server error.' });
  }
};
 
const getAllProducts =  async (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit =  parseInt(req.query.limit) || 10;
 


  const skip = (page - 1) * limit; //0 3
  const lastIndex = page * limit; //3 6

  try {

    const products = await Product.find({}).skip(skip).limit(lastIndex);
    const totalItems = await Product.countDocuments();
    // console.log(products);
      res.json({
        products: products,
        total_pages: Math.ceil(totalItems / limit),
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
}

const findRecentProducts = async (req, res) => {
  try {
    

    const page = parseInt(req.query.page) || 1;
    const limit =  parseInt(req.query.limit)

    const skip = (page - 1) * limit; //0 3
   const lastIndex = page * limit;

    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 10);

    const recentProducts = await Product.find({ created_at: { $gte: twoWeeksAgo } })
    .sort({ created_at: -1 }) 
    .skip(skip) 
    .limit(limit); 
    
    const totalItems = await Product.countDocuments({created_at:{ $gte: twoWeeksAgo }});

    let nextPage = 1;
    let prevPage = totalItems;

    if(lastIndex < totalItems){
      nextPage = page + 1;
     }
     if(skip > 0){
       prevPage = page - 1;
       prevPage = totalItems;
     }
   
      res.json({
       current_page: page,
       total_pages: Math.ceil(totalItems / limit),
       next_page: nextPage,
       prev_page: prevPage,
       total_items:totalItems,
       recentProducts,
   });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
const deleteProducts = async (req, res) => {

  const productId = req.params.id;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Delete product images
    const deletePromises = product.product_images.map((image) => {
      const filename = image.replace('product_image/', '');
      const filePath = path.join(__dirname, '..', 'uploads', 'product_image', filename);

      // Delete each image file
      return deleteFile(filePath);
    });

    // Wait for all image deletions to complete
    await Promise.all(deletePromises);

    // Delete the product from the database
    await Product.deleteOne({ _id: productId });

    // Respond with success
    res.status(200).json({ message: 'Product and images deleted successfully' });

  } catch (err) {
    console.error(err);
    // Handle different error cases
    if (err.message === 'Product not found') {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};


const editProducts = async(req,res)=>{
   
  const productId = req.body.productId;
  await Product.findById({_id:productId}).then((product)=>{
    if(product){
      product.product_name = req.body.product_name || product.product_name;
      product.product_category = req.body.product_category || product.product_category;
      product.product_price = req.body.product_price || product.product_price;
      product.product_description = req.body.product_description || product.product_description;
     
      product.save().then(()=>{
        res.status(200).json({message:'Product updated successfully'})
      })
    
    }
    else{
      res.status(404).json({message:'Product not found'})
    }
  })
}


  module.exports = {
    addProduct,
    getProducts,
    findProduct,
    searchProducts,
    getAllProducts,
    findRecentProducts,
    deleteProducts,
    editProducts,
  };