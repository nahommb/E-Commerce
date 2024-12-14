import { NUMBEROFUSERSRESPONSE } from "../constants"

const initialState = {
    numberOfUsers:[]
}

export const analyticsReducer = (state = initialState, action)=>{
    switch(action.type){
        case NUMBEROFUSERSRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                numberOfUsers:action.payload
            }
        default:
            return state
    }
}