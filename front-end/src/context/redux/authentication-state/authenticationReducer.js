import { REGISTER, REGISTERRESPONSE } from "../constants";

const initialState = {
    isRegistered:false
}

export const authenticationData = (state = initialState,action)=>{
    // console.log(action.payload);
    switch(action.type){
        case REGISTERRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                isRegistered:action.payload.registered
            }
        default:
            return state;
    }
}