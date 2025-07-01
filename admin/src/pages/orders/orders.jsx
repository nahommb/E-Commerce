import { Button } from "@mui/material"
import { MyDataTable } from "../../components/table/data_table"
import './order.css'
import { Paginate } from "../../components/paginate/paginate"
import { assignDelivery, getOrders, getReadyOrders,deliverd } from "../../context/redux/orders/orderAction"
import { useDispatch, useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { format, parseISO } from 'date-fns';


export const Orders = ()=>{

const dispatch = useDispatch()

const orders = useSelector((state)=>state.orderData.orders)
const readyOrders = useSelector((state)=>state.orderData.readyOrders)
const isAssigned = useSelector((state)=>state.orderData.assignedForDelivery)
const isDeliverd = useSelector((state)=>state.orderData.delivered)



  const [expandedRow, setExpandedRow] = useState(null);
 
  const toggleRowExpansion = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id)); // Toggle the row
  };

  const onPageChange = (e)=>{
    console.log(e.selected+1)
    dispatch(getOrders({
     page: e.selected+1,
      limit: 8 
    }))
   
   }
  
   const readyOrdersPageChange = (e)=>
   {
    dispatch(getReadyOrders({
      page:e.selected+1,
      limit:8
    }))
   }
   
  const assignHandler = (e,id)=>{
    e.stopPropagation()
  
    dispatch(assignDelivery({
      id:id
    }))
    // setRefresh((prev) => !prev); 
  }
const deliveryHandler = (e,id)=>{
  e.stopPropagation()
  // setRefresh((prev) => !prev); 
  dispatch(deliverd({
    id:id
  }))
}

  useEffect(()=>{
    dispatch(getOrders({
      page: 1,
      limit: 8
    }))
    dispatch(getReadyOrders({
      page:1,
      limit:8
    }))
  
  },[isAssigned,isDeliverd]) 
   console.log('lee')
  // console.log(orders.orders[0].ordered_items[0].quantity)

    return <div className="p-8 w-full">
      <div className="custom-table-row mb-4 bg-light-purple text-white ml-10 mr-10 p-3">
        <p>Order</p>
        <p >Ordered By</p>
        <p>Phone</p>
        <p>Date</p>    
        <p>Status</p>  
      </div>
      <div className="table-container">
      {orders.orders?.map((data, index) => {
        const formattedDate = format(parseISO(data.ordered_at), "MMMM d, yyyy h:mm a");
        return (
          
         <div>
         <div
            className={`custom-table-row ${expandedRow === data._id ? "expanded" : ""}`}
            key={data._id}
            onClick={() => toggleRowExpansion(data._id)}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              transition: "height 0.3s ease",
              height: expandedRow === data._id ? "auto" : "50px", // Adjust based on your design
            }}
          >
            <p>{data._id}</p>
            <p>{data.ordered_by}</p>
            <p>{data.phone}</p>
           
            <>{formattedDate}</>
            <p>{data.status}</p>
            {/* Additional Content for Expanded Row */}
           
          </div> 
          {expandedRow === data._id && (
              <div className="expanded-content" style={{ marginTop: "10px",display:'block' }}>
                 {data.ordered_items_detail.map((item, index) => (
                 
                  <div key={index}>
                    <p>Product: {item.product.product_name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                    <p>Price: {item.product.price}</p>
                    <hr/>
                  </div>
                ))}
                <p>Total: {data.total_price}</p>
                <p>Address: {data.address}</p>   
                <Button
                 
                  style={{
                    border: "1px solid #8E05C2",
                    color: "#8E05C2",
                    borderRadius: "8px",
                    padding: "5px 17px",
                    margin:'15px 5px'
                  }}
                  onClick={(e)=>assignHandler(e,data._id)}
            >
              Assign
            </Button>       
              </div>
            )}
         </div>
        );
      })}
    </div>
     <Paginate pageCount={orders?.total_pages} onPageChange={onPageChange}/>
   
     <h1 className="text-light-purple mt-10">Assigned For Delivery</h1>
     <div className= "p-4">
       <div className="p-4 border table-container">
        
     {readyOrders.orders?.map((data)=>{
       
        return <div className="custom-table-row">
        <p>{data._id}</p>
        <p>{data.ordered_by}</p>
        <p>{data.phone}</p>
        <p>{data.address}</p>
        {/* <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>Assigned</Button> */}
        <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}
        onClick={(e)=>deliveryHandler(e,data._id)}>
         Deliverd
        </Button>
        
     </div>
     })}
       </div>
       <Paginate pageCount={readyOrders.total_pages} onPageChange={readyOrdersPageChange}/>
     </div>
     {/* <MyDataTable/> */}
    </div>
}