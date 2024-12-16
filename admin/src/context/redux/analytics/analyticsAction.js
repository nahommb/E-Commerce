import { NUMBEROFUSERS,NUMBEROFPRODUCTSSOLD, DELIVEREDANDNOTDELIVERED, MOSTSOLDCATEGORY } from "../constants"

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
export const deliveredAndNotDelivered = (action)=>{
    return {
        type:DELIVEREDANDNOTDELIVERED,
        payload:action
    }
}

export const mostSoldCategory = (action)=>{
    return {
        type:MOSTSOLDCATEGORY,
        payload:action
    }
}