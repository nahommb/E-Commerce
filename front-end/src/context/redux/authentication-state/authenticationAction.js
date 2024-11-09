import { LOGIN, REGISTER,
     REGISTERRESPONSE ,
     LOGINRESPONSE,VALIDATETOKEN, LOGOUT} from "../constants";

export const register = (data)=>{
    console.log(data);
    return {
        type:REGISTER,
        payload:data
    }
}
export const registerResponse = (data)=>{
    console.log(data);
    return {
        type:REGISTERRESPONSE,
        payload:data
    }
}
export const login = (data)=>{
    
    return {
        type:LOGIN,
        payload:data
    }
}

export const loginResponse = (data)=>{
    
    return {
        type:LOGINRESPONSE,
        payload:data
    }
}

export const valideteToken = (data)=>{

    return {
        type:VALIDATETOKEN,
        payload:data
    }
}
export const logout= (data)=>{

    return {
        type:LOGOUT,
        payload:data
    }
}