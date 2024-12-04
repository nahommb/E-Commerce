import axios from 'axios'
import { baseUrl } from '../../helper/base_url';

export const registerRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/register`,payload)
  
     return response
  }

  export const loginRequest = (payload)=>{
  
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/login`,payload)
  
     return response
  }
  export const validetTokenRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/validate_token`,payload)
  
     return response
  }

  export const logoutRequest = (payload)=>{
   axios.defaults.withCredentials = true;
    const response = axios.post(`${baseUrl}user/logout`)
 
    return response
 }
