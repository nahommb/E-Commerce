import { LOGIN_REQUEST, LOGOUT, VALIDATETOKEN } from "../constants"

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

export const logout = ()=>{
    return {
        type: LOGOUT
    }
}
