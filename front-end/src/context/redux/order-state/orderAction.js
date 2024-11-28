import { CREATEORDER } from "../constants"

export const createOrder = (data)=>{
console.log(data)
   return{
      type:CREATEORDER,
      payload:data
   }
  
} 