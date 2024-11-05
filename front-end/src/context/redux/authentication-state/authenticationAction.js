import { REGISTER } from "../constants";

export const register = (data)=>{
    console.log(data);
    return {
        type:REGISTER,
        payload:data
    }
}