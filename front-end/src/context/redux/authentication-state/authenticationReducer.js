import { TrendingUpRounded } from "@mui/icons-material";
import { LOGIN, LOGINERROR, LOGINRESPONSE, LOGOUT, REGISTER, REGISTERRESPONSE, VALIDATETOKENRESPONSE,REGISTERERROR, VERIFY, VERIFYRESPONSE } from "../constants";

const initialState = {
    isRegistered:false,
    user:null,
    valideToken:false,
    loginError:null,
    isLoading:false,
    isRegisterLoading:false,
    registerResponseMessage:'',
    isRegisteredResponse:false,
    isVerificationResponse:false,
    verificationMessage:'',
    isVerified:false
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
                registerResponseMessage:action.payload.message,
                // isVerified:action.payload.verified
            }
        case 'RESET_REGISTER_RESPONSE':
            return {
                ...state,
                isRegisteredResponse:false,
                isRegistered:false,
                isRegisterLoading:false,
                registerResponseMessage:'',
                isVerified:false
            }
        case REGISTERERROR:
            console.log(action.payload);
            return {
                ...state,
                isRegisteredResponse:true,
                isRegisterLoading:false,
                registerResponseMessage:action.payload.message,
                isVerified:action.payload.verified
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
        case VERIFY:
            console.log(action.payload)
            return {
                ...state,
               isRegisterLoading:true
            }
        case VERIFYRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                isRegisterLoading:false,
                isVerificationResponse:true,
                verificationMessage:action.payload.message
            }
        case 'RESET_VERIFY':
            return {
                ...state,
                isVerificationResponse:false
            }
        
        default:
            return state;
    } 
}