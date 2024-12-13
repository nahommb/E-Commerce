import { ASSIGNDELIVERY, GETORDERS ,GETREADYORDERS,DELIVERD} from "../constants";

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
export const deliverd = (data)=>{
    return {
        type:DELIVERD,
        payload:data
    }
}