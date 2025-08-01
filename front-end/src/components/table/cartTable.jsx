import { Button, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './cartTable.css' 
import { useSelector,useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../../context/redux/cart-state/cart_action';
import { useState } from "react"
import { OverlayCard } from "../../components/overlay_card/overlay_card"
import { createOrder } from '../../context/redux/order-state/orderAction';


export const CartTable = ()=>{


const dispatch = useDispatch();

const orderSuccess = useSelector((state)=>state.orderData.order_success);
const orderSuccessMessage = useSelector((state)=>state.orderData.order.message);
console.log(orderSuccess)

  const [showPopup, setShowPopup] = useState(false);
  const [orderSuccessPopup, setOrderSuccessPopup] = useState(false);



  const orderHandler = ()=>{
    setShowPopup(true)
  }

 
 const cart  = useSelector((state) => state.cartReducer.cart);
 let subTotal = 0
 const shippingFee = 300
 let i = 0
 for (i; i<cart.length;i++){
    subTotal+= parseInt(cart[i].total)
 }
//  console.log(cart)

  const overlayOnClick = async(input_data) => {
       const order = await cart.map((item) => ({
        product_name: item.product_name,
        product_id: item._id,
        price: item.price,
        quantity: item.quantity,
        total: item.total,
        size:item.size,
        custom_print:item.custom_print
      }));
      console.log(order)
       dispatch(createOrder({
        ordered_by:input_data.name,
        ordered_items:order,
        phone:input_data.phone,
        address:input_data.address,
        // custome_print:''
       }))
      // setShowPopup(false);
       // window.location.reload();
    }
  const cancelClick = ()=>{
    setShowPopup(false)
   
  }
 const orderSuccessHandler = ()=>{
   setOrderSuccessPopup(false)
   dispatch(clearCart())
   setShowPopup(false)
  //  window.location.reload();
 }
  // const data = [
  //   { products: 1, title: 'Barcelon Away kit 2024/25', price: '$10' ,quantitty:2,total:'$40',},
  //   { products: 2, title: 'Real Madrid Home Kit 2024/25', price: '$6' ,quantitty:2,total:'$40'},
  //   { products: 3, title: 'Manchester united 3rd kit 2024/25', price: '$13',quantitty:2, total:'$40'}
  // ];
  
  const columns = [
    {
      name: 'Products',
      selector: row => row.product_name,
      sortable: true
    },
    {
      name: 'Custome Print',
      selector: row => row.custome_print,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => row.price
    },
    {
        name: 'Quantity',
        selector: row => row.quantity
      },
        {
        name: 'Size',
        selector: row => row.size
      },
      {
        name: 'Total',
        selector: row => row.total
      },
      {
        name: 'Remove',
        cell:row=>(
            <Button onClick={()=>dispatch(removeFromCart({_id:row._id,quantity:row.quantity,date:row.date}))}>
                <CloseIcon style={{color:'red'}}></CloseIcon>
            </Button>
        )
       
      }
  ];
const tottalData = [
    {
    name:'Subtotal',value:subTotal+' ETB'
   },
   {
    name:'Shipping fee',value:shippingFee +" ETB"
   },
   {
    name:'Total', value:subTotal+shippingFee
   }
]
const totalDataColumns = [
        {
            name: '',
            selector: row => row.name
        },
        {
            name: 'Value',
            selector: row => row.value
        },

    
]


    return <>
    <div className='top-table' style={{backgroundColor:'whitesmoke',padding:'30px',borderRadius:'8px'}}>
    {showPopup?<OverlayCard  
        title="Order" 
        button_text="Order Now" 
        onClick={overlayOnClick}
        onCancel={cancelClick}
        />:<></>}
      {/* {showPopup  && 0===0?<div><CircularProgress/></div>:<div></div>} */}
      {orderSuccess?<OverlayCard  
        title="Order Response" 
        button_text="Ok" 
        message={orderSuccessMessage}
        onClick={orderSuccessHandler}
        />:<></>}
    <DataTable
      title={<h2 style={{color:'white',textAlign: 'center',backgroundColor:'#C4D7FF',padding:'20px',}}>Your Cart</h2>}
      columns={columns}
      data={cart}
      
      // pagination
    />
    </div>
    {cart.length>0?<div className='bottom-table' style={{marginTop:'80px', width:'300px', backgroundColor:'whitesmoke',padding:'20px',borderRadius:'8px'}}>
        <DataTable
        title={<h4>Cart Totals</h4>}
        columns={totalDataColumns}
        data={tottalData}
    />
    <br/>
    <Button style={{color:'green'}} onClick={orderHandler}>Proceed to order</Button>
    </div>:<div style={{height:'300px'}}></div>
    }
  

    </>
}