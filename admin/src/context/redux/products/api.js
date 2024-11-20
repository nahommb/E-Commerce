import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const addProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}products/add_products`,payload)
  
     return response
  }