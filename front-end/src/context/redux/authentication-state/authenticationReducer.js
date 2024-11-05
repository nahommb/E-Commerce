import { REGISTER } from "../constants";

const initialState = {
    register:null
}

export const authenticationData = (state = initialState,action)=>{
    switch(action.type){
        case REGISTER:
        return {
            ...state,
            register:action.payload.registerd
        }
        default:
            return state;
    }
}