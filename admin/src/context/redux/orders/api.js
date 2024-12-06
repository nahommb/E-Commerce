import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const getOrdersRequest = async (payload) => {
    axios.defaults.withCredentials = true;
     console.log(payload)
    const response = await axios.get(`${baseUrl}orders/get_orders/?page=${payload.page}&limit=${payload.limit}`, payload);

    return response;
};

