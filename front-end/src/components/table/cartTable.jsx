import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
    { products: 1, title: 'John Doe', price: '$10' ,quantitty:2,total:'$40',},
    { products: 2, title: 'Jane Smith', price: '$6' ,quantitty:2,total:'$40'},
    { products: 3, title: 'Alice Johnson', price: '$13',quantitty:2, total:'$40'}
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


export const CartTable = ()=>{
    return <>
    <DataTable
      title={<h2 style={{color:'gray',textAlign: 'center',backgroundColor:'#B6FFA1',padding:'20px'}}>Your Cart</h2>}
      columns={columns}
      data={data}
    //   pagination
    />
    </>
}