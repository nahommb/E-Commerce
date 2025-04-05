
const {upload} = require('../helper/image_uploader');
const Product = require('../models/product_model');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');

const addProduct = (req, res) => {
  upload.array('images', 10)(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'Missing image(s)' });
    }

    try {
      // Extract Cloudinary URLs from uploaded files
      const images = req.files.map((file) => file.path); // Cloudinary returns file URLs in `path`
      
      // Create a new product object
      const newProduct = new Product({
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        product_images: images.reverse(), // Store URLs (reversed for consistency if needed)
        custom_print: req.body.custom_print,
        product_category: req.body.product_category,
        price: req.body.price,
        created_at: Date.now(),
      });

      // Save the product to the database
      await newProduct.save();

      return res.json({ message: 'Successfully uploaded', product: newProduct });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to save product' });
    }
  });
};
  

const getProducts = async (req, res) => {

   const page = parseInt(req.query.page) || 1;
   const limit =  parseInt(req.query.limit) || 10;
   const category = req.params.category;
  

   const skip = (page - 1) * limit; //0 3
   const lastIndex = page * limit; //3 6
   
   if(category === 'all'){
    const products = await Product.find().skip(skip).limit(limit);
    // const products = await Product.aggregate([
    //   { $sample: { size: limit } } // Randomly select `limit` documents
    // ]);
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
  try {
    const  productId  = req.params.id;

  
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

  
   await Promise.all(
      product.product_images.map(async (imageUrl) => {

        const publicId = imageUrl.split('/').pop().split('.')[0]; // e.g., "product_image/imageName"
        return cloudinary.uploader.destroy(`uploads/${publicId}`);
      })
    ); 

    await product.deleteOne();

    return res.status(200).json({ message: 'Product and associated images deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to delete product' });
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