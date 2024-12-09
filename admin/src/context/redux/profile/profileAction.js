import { CHANGEPASSWORD } from "../constants"

export const changePassword = (payload)=>{
    return {
        type:CHANGEPASSWORD,
        payload
    }
}