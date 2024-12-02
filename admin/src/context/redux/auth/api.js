import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const loginRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post(`${baseUrl}user/login`,payload)

     return response
  }
