import axios from 'axios'

export const registerRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post('http://localhost:3000/api/user/register',payload)
  
     return response
  }