import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const getOrdersRequest = async (payload) => {
    axios.defaults.withCredentials = true;
     console.log(payload)
    const response = await axios.get(`${baseUrl}orders/get_orders/?page=${payload.page}&limit=${payload.limit}`, payload);

    return response;
};

export const assignDeliveryRequest = async (payload)=>{
    axios.defaults.withCredentials =  true

    const response = await axios.put(`${baseUrl}orders/assign_delivery/${payload.id}`)

    return response
}
export const getReadyOrdersRequest = async (payload)=>{
    axios.defaults.withCredentials =  true

    const response = await axios.get(`${baseUrl}orders/ready_orders/?page=${payload.page}&limit=${payload.limit}`)

    return response
}

export const deliverdRequest = async(payload)=>{
    axios.defaults.withCredentials =  true
    const response = await axios.put(`${baseUrl}orders/deliverd/${payload.id}`)

    return response
}