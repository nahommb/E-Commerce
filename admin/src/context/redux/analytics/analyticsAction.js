import { NUMBEROFUSERS,NUMBEROFPRODUCTSSOLD } from "../constants"

export const numberOfUsers = (action)=>{
    return {
        type:NUMBEROFUSERS,
        payload:action
    }
}

export const numberOfProductsSold = (action)=>{
    return {
        type:NUMBEROFPRODUCTSSOLD,
        payload:action
    }
}
