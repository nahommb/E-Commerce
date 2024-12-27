import { LOGIN, LOGINERROR, LOGINRESPONSE, LOGOUT, REGISTER, REGISTERRESPONSE, VALIDATETOKENRESPONSE,REGISTERERROR } from "../constants";

const initialState = {
    isRegistered:false,
    user:null,
    valideToken:false,
    loginError:null,
    isLoading:false,
    isRegisterLoading:false,
    registerResponseMessage:'',
    isRegisteredResponse:false,
}

export const authenticationData = (state = initialState,action)=>{
    // console.log(action.payload);
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                isRegisterLoading:true
            }
        case LOGIN:
            return {
                ...state,
                isLoading:true
            }
        case REGISTERRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                isRegisteredResponse:true,
                isRegistered:action.payload.registered,
                isRegisterLoading:false,
                registerResponseMessage:action.payload.message
            }
        case 'RESET_REGISTER_RESPONSE':
            return {
                ...state,
                isRegisteredResponse:false,
                isRegistered:false,
                isRegisterLoading:false,
                registerResponseMessage:''
            }
        case REGISTERERROR:
            console.log(action.payload);
            return {
                ...state,
                isRegisteredResponse:true,
                isRegisterLoading:false,
                registerResponseMessage:action.payload.message
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