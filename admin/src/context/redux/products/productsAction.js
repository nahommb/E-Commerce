import { ADDPRODUCTS,GETALLPRODUCTS,DELETEPRODUCTS } from "../constants"

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

export const deleteProduct = (data)=>{
    return {
        type: DELETEPRODUCTS,
        payload: data
    }
}