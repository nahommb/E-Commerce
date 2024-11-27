import { CREATEORDER } from "../constants"

export const createOrder = (data)=>{
   
   return{
      type:CREATEORDER,
      payload:data
   }
  
} 