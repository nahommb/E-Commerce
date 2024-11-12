import { ADDTOCART } from "../constants"

export const addToCart = (data)=>{
    console.log(data)
    return {
        type:ADDTOCART,
        payload:data
    }
}