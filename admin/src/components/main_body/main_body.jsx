import { useState } from "react"
import { SideBar } from "../sidebar/sidebar"

import './main_body.css'
import { AddProducts } from "../../pages/add_products/add_products";
import { Orders } from "../../pages/orders/orders";
export const MainBody = ()=>{

   const [bodyIndex , setBodyIndex] = useState(0);

    const elements = [
    <Orders/>,
    <AddProducts/>
    ]
 
const onButtonClick = (index)=>{
  setBodyIndex(index)
  console.log(index)
}

return <>
    <div className="main-body">
       <SideBar onButtonClick = {onButtonClick}></SideBar> 
       {/* <div style={{height:'500px',width:'700px',backgroundColor:'red'}}></div> */}
       {elements[bodyIndex]}
    </div>
</>
}