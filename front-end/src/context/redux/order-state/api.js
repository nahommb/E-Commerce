import axios from "axios";
import { baseUrl } from "../../helper/base_url";

export const createOrderRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}orders/create_order`,payload)
  
     return response
  }
 