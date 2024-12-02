import { LOGIN_REQUEST, VALIDATETOKEN } from "../constants"

export const loginAction = (data)=>{
    console.log(data)
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}
export const validateToken= ()=>{
    return {
        type: VALIDATETOKEN
    }
}
