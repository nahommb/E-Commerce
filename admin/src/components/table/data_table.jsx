import React from 'react';
import DataTable from 'react-data-table-component';
import { Button } from '@mui/material';


export const MyDataTable = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Alice Johnson', age: 25 },
  ];

  const columns = [
    {
      name: 'id',
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'age',
      selector: row => row.age
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
                {/* <CloseIcon style={{color:'red'}}></CloseIcon> */}
            </Button>
        )
       
      }
  ];

  return (
    <DataTable
      title=""
      columns={columns}
      data={data} 
    />
  );
};


