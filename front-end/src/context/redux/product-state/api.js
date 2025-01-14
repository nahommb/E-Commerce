import axios from 'axios'
import { baseUrl } from '../../helper/base_url';

export const getProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
     const response = axios.get(`${baseUrl}products/get_products/${payload.category}?page=${payload.page}&limit=${payload.limit}`,)
  
     return response
  }

  export const findProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
     const response = axios.get(`${baseUrl}products/find_product/${payload._id}`,)
  
     return response
  }

  export const getRecentProductRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;
    const response = axios.get(`${baseUrl}products/get_recent_products?page=${payload.page}&limit=${payload.limit}`,)

    return response
  }

  export const getSiteDataRequest = (payload)=>{
    console.log(payload);
    axios.defaults.withCredentials = true;

    const response = axios.get(`${baseUrl}site_data/`,)

    return response
  }