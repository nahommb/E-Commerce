import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const loginRequest = (payload)=>{
    console.log(payload)
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/isAdmin`,payload)

     return response
  }

  export const validetTokenRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/validate_admin_token`)
  
     return response
  }

  export const logoutRequest = ()=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/logout_admin`)

     return response
  }