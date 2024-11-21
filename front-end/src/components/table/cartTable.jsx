import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import DataTable from 'react-data-table-component';
import './cartTable.css' 
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../../context/redux/cart-state/cart_action';




export const CartTable = ()=>{

 const dispatch = useDispatch();
 const cart  = useSelector((state) => state.cartReducer.cart);
 let subTotal = 0
 const shippingFee = 200
 let i = 0
 for (i; i<cart.length;i++){
    subTotal+= parseInt(cart[i].total)
 }
 console.log(cart)

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
      name: 'Title',
      selector: row => row.product_description,
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
    
    <DataTable
      title={<h2 style={{color:'white',textAlign: 'center',backgroundColor:'#C4D7FF',padding:'20px',}}>Your Cart</h2>}
      columns={columns}
      data={cart}
      
      // pagination
    />
    </div>

    <div className='bottom-table' style={{marginTop:'80px', width:'300px', backgroundColor:'whitesmoke',padding:'20px',borderRadius:'8px'}}>
        <DataTable
        title={<h4>Cart Totals</h4>}
        columns={totalDataColumns}
        data={tottalData}
    />
    <br/>
    <Button style={{color:'red'}}>Proceed to Payment</Button>
    </div>

    </>
}