import { ASSIGNDELIVERY, GETORDERS ,GETREADYORDERS} from "../constants";

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
export const getReadyOrders = (data)=>{
    return {
        type:GETREADYORDERS,
        payload:data
    }
}