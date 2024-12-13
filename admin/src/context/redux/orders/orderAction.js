import { ASSIGNDELIVERY, GETORDERS } from "../constants";

export const getOrders = (data)=>{
    console.log(data)
    return {
        type: GETORDERS,
        payload: data
    }
}

export const assignDelivery=(data)=>{
    return {
        type:ASSIGNDELIVERY,
        payload:data,
    }
}