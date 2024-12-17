import { CHANGENAMERESPONSE, VALIDATETOKEERORRNRESPONSE,LOGINERROR, LOGINRESPONSE, LOGIN_REQUEST, VALIDATETOKEN, VALIDATETOKENRESPONSE } from "../constants"

const init = {
    isLoggedIn:false,
    user:null,
    error:null,
    isValideToken:false,
    isLoading:false
}

export const authReducer = (state=init,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true,
                error:null
            }
        case LOGINRESPONSE:
            console.log(action.payload);
          return {
            ...state, 
            user:action.payload,
            isLoggedIn:true,
            error:null,
            isLoading:false
          }
        case LOGINERROR:
            console.log(action.payload);
            return {
                ...state,
                error:action.payload,
                isLoading:false
            } 
        case VALIDATETOKEN:
            return{
                ...state,
                isLoading:true
            }
        case VALIDATETOKENRESPONSE:
            console.log(action.payload.valideToken);
            return {
                ...state,
                user:action.payload.user,
                isValideToken:action.payload.valideToken,
                isLoading:false
            }
        case VALIDATETOKEERORRNRESPONSE:
            return {
                ...state,
                isLoading:false
            }
        case CHANGENAMERESPONSE:
            console.log(action.payload);
            return {
                ...state,
                user:action.payload.user
            }
        
        default:
            return state
    }
}