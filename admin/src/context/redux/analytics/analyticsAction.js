import { NUMBEROFUSERS } from "../constants"

export const numberOfUsers = (action)=>{
    return {
        type:NUMBEROFUSERS,
        payload:action
    }
}