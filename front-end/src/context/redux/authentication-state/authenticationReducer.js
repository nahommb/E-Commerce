import { LOGIN, LOGINERROR, LOGINRESPONSE, LOGOUT, REGISTER, REGISTERRESPONSE, VALIDATETOKENRESPONSE } from "../constants";

const initialState = {
    isRegistered:false,
    user:null,
    valideToken:false,
    loginError:null,
    isLoading:false
}

export const authenticationData = (state = initialState,action)=>{
    // console.log(action.payload);
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLoading:true
            }
        case REGISTERRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                isRegistered:action.payload.registered
            }
        case LOGINRESPONSE:
            
            return {
                ...state,
                user:action.payload.updatedUser,
                isLoading:false
            }
        case VALIDATETOKENRESPONSE:
            console.log(action.payload);
            return {
                ...state, 
                 valideToken:action.payload.valideToken,
                 user:action.payload.user
            }
        case LOGINERROR:
            console.log(action.payload);
            return {
                ...state,
                loginError:action.payload,
                isLoading:false
            }
        case LOGOUT:
            return {
                ...state,
                user:null,
                valideToken:false
            }
        
        default:
            return state;
    }
}