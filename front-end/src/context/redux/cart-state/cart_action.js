import { ADDTOCART, CLEARCART, REMOVEFROMCART } from "../constants"

export const addToCart = (data)=>{
    console.log(data)
    return {
        type:ADDTOCART,
        payload:data
    }
}
export const removeFromCart = (data)=>{
    console.log(data)
    return {
        type:REMOVEFROMCART,
        payload:data
    }
}

export const clearCart = ()=>{
    return {
        type:CLEARCART,
     
    }
}
