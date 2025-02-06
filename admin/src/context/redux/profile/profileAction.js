import { CHANGEPASSWORD,CHANGENAME,CHANGEEMAIL, ADDSITEDATA } from "../constants"

export const changePassword = (payload)=>{
    return {
        type:CHANGEPASSWORD,
        payload
    }
}

export const changeName = (payload)=>{
    console.log(payload)
    return {
        type:CHANGENAME,
        payload
    }
}

export const changeEmail = (payload)=>{
    return {
        type:CHANGEEMAIL,
        payload
    }
}
export const addSiteData = (payload)=>{
        console.log(payload)
    return {
        type:ADDSITEDATA,
        payload
    }
}