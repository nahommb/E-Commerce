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
  const search = req.query.search;  // Optional chaining to avoid errors if query is undefined
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
  const skip = parseInt(req.query.page) || 1;
  const limit =  parseInt(req.query.limit) || 5
  ;
  try {
    const products = await Product.find().skip(skip).limit(limit);
    const totalItems = await Product.countDocuments();
      res.json({
        products: products,
        totalItems: totalItems,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
}
  module.exports = {
    addProduct,
    getProducts,
    findProduct,
    searchProducts,
    getAllProducts,
  };