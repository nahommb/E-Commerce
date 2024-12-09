import axios from "axios";
import { baseUrl } from "../../helper/baseUrl";

export const changePasswordRequest = async(data)=>{
    console.log(data)
    axios.defaults.withCredentials = true;
    
    const response = await axios.put(`${baseUrl}user/change_password`,data)
    
    return response
   
}

export const changeNameRequest = async(data)=>{
    console.log(data)
    axios.defaults.withCredentials = true;
    
    const response = await axios.put(`${baseUrl}user/change_name`,data)
    
    return response
   
}