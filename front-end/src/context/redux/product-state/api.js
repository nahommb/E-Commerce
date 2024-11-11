import axios from 'axios'
import { baseUrl } from '../../helper/base_url';

export const getProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
     const response = axios.get(`${baseUrl}products/get_products/${payload.category}?page=${payload.page}&limit=${payload.limit}`,)
  
     return response
  }