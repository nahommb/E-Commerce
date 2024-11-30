import { LOGINERROR, LOGINRESPONSE, REGISTER, REGISTERRESPONSE, VALIDATETOKENRESPONSE } from "../constants";

const initialState = {
    isRegistered:false,
    user:null,
    valideToken:false,
    loginError:null
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
        case LOGINRESPONSE:
            
            return {
                ...state,
                user:action.payload.updatedUser
            }
        case VALIDATETOKENRESPONSE:
            console.log(action.payload.valideToken);
            return {
                ...state, 
                 valideToken:action.payload.valideToken
            }
        case LOGINERROR:
            console.log(action.payload);
            return {
                ...state,
                loginError:action.payload
            }
        
        default:
            return state;
    }
}