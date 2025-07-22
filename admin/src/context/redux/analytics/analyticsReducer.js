import { DELIVEREDANDNOTDELIVEREDRESPONSE, MOSTSOLDCATEGORYRESPONSE,NUMBEROFPRODUCTSSOLDRESPONSE, NUMBEROFUSERSRESPONSE, USERVISTEDRESPONSE } from "../constants"

const initialState = {
    numberOfUsers:[],
    numberOfProductsSold:[],
    deliveredAndNotDelivered:[],
    mostSoldCategory:[],
    vistors:{}
}

export const analyticsReducer = (state = initialState, action)=>{
    switch(action.type){
        case NUMBEROFUSERSRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                numberOfUsers:action.payload
            }
        case NUMBEROFPRODUCTSSOLDRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                numberOfProductsSold:action.payload
            }
        case DELIVEREDANDNOTDELIVEREDRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                deliveredAndNotDelivered:action.payload
            }
        case MOSTSOLDCATEGORYRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                mostSoldCategory:action.payload
            }
        case USERVISTEDRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                vistors:action.payload
            }
        default:
            return state
    }
}
