import { Button } from "@mui/material"
import { MyDataTable } from "../../components/table/data_table"
import './order.css'
import { Paginate } from "../../components/paginate/paginate"


export const Orders = ()=>{


const data = [1,2,3,4,5,6]


    return <div className="p-8 w-full">
      <div className="custom-table-row  ml-10 mr-10 bg-light-purple text-white">
        <p >Product Name</p>
        <p>Ordered By</p>
        <p>Phone</p>
        <p>Custom print</p>
        <p>Date</p>
        <div className="w-72"></div>
      </div>
     <div className="table-container">
    {data.map((index,data)=>{
        return <div className="custom-table-row">
        <p>Real Madrid Home kit</p>
        <p>Nahom</p>
        <p>098765421</p>
        <p>lee 11</p>
        <p>12-20-24</p>
        <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>Assigned</Button>
        <Button style={{border:'1px solid #8E05C2',color:'#8E05C2',borderRadius:'8px',padding:'5px 17px'}}>
        Not Assigned
        </Button>
        
     </div>
     })}
     </div>
     <Paginate pageCount={10} onPageChange={()=>{}}/>
   
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