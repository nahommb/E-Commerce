import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const addProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}products/add_products`,payload)
  
     return response
  }

export const getProductRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.get(`${baseUrl}products/get_all_products?page=${payload.page}&limit=${payload.limit}`)

     return response
  }