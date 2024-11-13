import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import DataTable from 'react-data-table-component';
import './cartTable.css' 
import { useSelector } from 'react-redux';




export const CartTable = ()=>{


 const cart  = useSelector((state) => state.cartReducer.cart);
 console.log(cart)

  const data = [
    { products: 1, title: 'Barcelon Away kit 2024/25', price: '$10' ,quantitty:2,total:'$40',},
    { products: 2, title: 'Real Madrid Home Kit 2024/25', price: '$6' ,quantitty:2,total:'$40'},
    { products: 3, title: 'Manchester united 3rd kit 2024/25', price: '$13',quantitty:2, total:'$40'}
  ];
  
  const columns = [
    {
      name: 'Products',
      selector: row => row.products,
      sortable: true
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => row.price
    },
    {
        name: 'Quantity',
        selector: row => row.quantitty
      },
      {
        name: 'Total',
        selector: row => row.total
      },
      {
        name: 'Remove',
        cell:row=>(
            <Button>
                <CloseIcon style={{color:'red'}}></CloseIcon>
            </Button>
        )
       
      }
  ];
const tottalData = [
    {
    name:'Subtotal',value:'$50'
   },
   {
    name:'Shipping fee',value:'$10'
   },
   {
    name:'Total', value:'$100'
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
      data={data}
      
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