import { REGISTER, REGISTERRESPONSE } from "../constants";

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