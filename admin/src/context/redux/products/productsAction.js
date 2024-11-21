import { ADDPRODUCTS, GETALLPRODUCTS } from "../constants"

export const addProducts = (data)=>{
    // console.log(data)
    return {
        type: ADDPRODUCTS,
        payload: data
    }
}

export const getProducts = (data)=>{
    return {
        type: GETALLPRODUCTS,
        payload: data
    }
}