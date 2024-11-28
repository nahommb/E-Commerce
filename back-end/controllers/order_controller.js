

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
                
                console.log(product) // Only store the ObjectId
            } else {
                return res.status(404).json({ message: `Product not found for ID: ${req.body.ordered_items[i]}` });
            }
        }
      const order = new Order({
        ordered_by:req.body.ordered_by,
        ordered_at:Date.now(),
        ordered_items:listOfProductIds,
        total_price:totalPrice,
        status:'pending', 
      })
      order.save()
        res.status(201).json({message:'Succssefuly Ordered You will recieve call from Our Oprators for further information'}); 
    } catch (error) {
        res.status(500).json({error:error.message});
    } 
}

module.exports = [createOrder];