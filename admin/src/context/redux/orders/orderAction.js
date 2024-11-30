import { GETORDERS } from "../constants";

export const getOrders = (data)=>{
    console.log(data)
    return {
        type: GETORDERS,
        payload: data
    }
}