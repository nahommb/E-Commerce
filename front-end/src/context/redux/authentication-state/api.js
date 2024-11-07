import axios from 'axios'

export const registerRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post('http://localhost:3000/api/user/register',payload)
  
     return response
  }

  export const loginRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post('http://localhost:3000/api/user/login',payload)
  
     return response
  }
  export const validetTokenRequest = (payload)=>{
    axios.defaults.withCredentials = true;
     const response = axios.post('http://localhost:3000/api/user/validate_token',payload)
  
     return response
  }