import { ADDPRODUCTS } from "../constants"

export const addProducts = (data)=>{
    // console.log(data)
    return {
        type: ADDPRODUCTS,
        payload: data
    }
}