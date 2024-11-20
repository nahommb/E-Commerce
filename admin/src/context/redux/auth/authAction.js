import { LOGIN_REQUEST } from "../constants"

export const loginAction = (data)=>{
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}

