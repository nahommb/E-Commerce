

const Order = require('../models/order_model');
const Product = require('../models/product_model');
const Delivery = require('../models/delivery_model');

const createOrder = async (req,res)=>{
    console.log(req.body);
    try {
        const delivery = new Delivery({
            name:'delivery_price',
            delivery_price:'300'
        })
        // delivery.save()

        let shippingFee = 0;
       await Delivery.find({name:'delivery_price'}).then((data)=>{
            if(data){
                shippingFee = data[0].delivery_price;
            }
        })
        let listOfProductIds = [];
        
        let totalPrice = parseFloat(shippingFee);

        for (let i = 0; i < req.body.ordered_items.length; i++) {
            let product = await Product.findById(req.body.ordered_items[i].product_id);
            if (product) {
                listOfProductIds.push(product._id);
                totalPrice += parseFloat(req.body.ordered_items[i].total);
                
                // console.log(product) // Only store the ObjectId
            } else {
                return res.status(404).json({ message: `Product not found for ID: ${req.body.ordered_items[i]}` });
            }
        }
      const order = new Order({
        ordered_by:req.body.ordered_by,
        phone:req.body.phone,
        address:req.body.address,
        ordered_at:Date.now(),
        ordered_items:listOfProductIds,
        total_price:totalPrice,
        custome_print:req.body.custom_print,
        status:'pending', 
      })
      order.save()
        res.status(201).json({message:'Your order has been successfully placed. You will receive a call from our operators for further information.',success:true}); 
    } catch (error) {
        res.status(500).json({error:error.message});
    } 
}

const getOrders = async (req, res) => {
    try {
      const page = req.query.page;
      const limit = req.query.limit;
  
      const skip = (page - 1) * limit; // Pagination
      const lastIndex = page * limit;
  
      // Fetch orders with pagination
      const order = await Order.find({}).skip(skip).limit(lastIndex);
      const total_items = await Order.countDocuments();
  
      // Add `ordered_items_detail` to each order
      for (let i = 0; i < order.length; i++) {
        const productPromises = order[i].ordered_items.map((item) => Product.findById(item));
        const products = await Promise.all(productPromises); // Resolve promises
        order[i]._doc.ordered_items_detail = products; // Add products to the order object
      }
  
      res.json({
        total_pages: Math.ceil(total_items / limit),
        orders: order.reverse(),
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

module.exports = {createOrder,getOrders};