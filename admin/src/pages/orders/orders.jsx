import { Button } from "@mui/material"
import { MyDataTable } from "../../components/table/data_table"
import './order.css'
import { Paginate } from "../../components/paginate/paginate"
import { getOrders } from "../../context/redux/orders/orderAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { format, parseISO } from 'date-fns';


export const Orders = ()=>{

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOrders({
      page: 1,
      limit: 8
    }))
  },[])

  const onPageChange = (e)=>{
    console.log(e.selected+1)
    dispatch(getOrders({
     page: e.selected+1,
      limit: 8
    }))
   }
   

  const orders = useSelector((state)=>state.orderData.orders)
  console.log(orders)

const data = [1,2,3,4,5,6]


    return <div className="p-8 w-full">
      <div className="custom-table-row mb-4 bg-light-purple text-white ml-10 mr-10 p-3">
        <p>Order</p>
        <p >Ordered By</p>
        <p>Phone</p>
        <p>Date</p>      
      </div>
     <div className="table-container">
    {orders.orders?.map((data,index)=>{
      {/* console.log(data.ordered_at) */}
      const formattedDate = format(parseISO(data.ordered_at),'MMMM d, yyyy h:mm a')
      {/* console.log(formattedDate) */}
        return (
          <div  className="custom-table-row" key={data._id}>
        <p>manchester United home kit 24/25</p>
        <p>{data.ordered_by}</p>
        <p>{data.phone}</p>
        {/* <p>{data.address}</p> */}
        <>{formattedDate}</>
        <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>Assign</Button>
        
     </div> );
     })}
     </div>
     <Paginate pageCount={orders?.total_pages} onPageChange={onPageChange}/>
   
     <h1 className="text-light-purple mt-10">Assigned For Delivery</h1>
     <div className= "p-4">
       <div className="p-4 border table-container">
        
     {data.map((index,data)=>{
        return <div className="custom-table-row">
        <p>Real Madrid Home kit</p>
        <p>Nahom</p>
        <p>098765421</p>
        <p>lee 11</p>
        <p>12-20-24</p>
        {/* <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>Assigned</Button> */}
        <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>
         Deliverd
        </Button>
        
     </div>
     })}
       </div>
       <Paginate pageCount={10} onPageChange={()=>{}}/>
     </div>
     {/* <MyDataTable/> */}
    </div>
}