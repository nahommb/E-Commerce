import { useState } from "react"
import { SideBar } from "../sidebar/sidebar"

import './main_body.css'
import { AddProducts } from "../../pages/add_products/add_products";
import { Orders } from "../../pages/orders/orders";
import { EditProducts } from "../../pages/edit_products/edit_products";
import { Analytics } from "../../pages/analytics/analytics";
import { Profile } from "../../pages/profile/profile";
export const MainBody = ()=>{

   const [bodyIndex , setBodyIndex] = useState(0);

    const elements = [
    <Orders/>,
    <AddProducts/>,
    <EditProducts/>,
    <Analytics/>,
    <Profile/>
    ]
 
const onButtonClick = (index)=>{
  setBodyIndex(index)
  console.log(index)
}

return <>
    <div className="main-body">
       <SideBar onButtonClick = {onButtonClick}></SideBar> 
       <div className="body-element-container" >
          {elements[bodyIndex]}
       </div>
       {/* <div style={{height:'500px',width:'700px',backgroundColor:'red'}}></div> */}
      
    </div>
</>
}