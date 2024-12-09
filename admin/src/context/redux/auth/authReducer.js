import { LOGINERROR, LOGINRESPONSE, VALIDATETOKENRESPONSE } from "../constants"

const init = {
    isLoggedIn:false,
    user:null,
    error:null,
    isValideToken:false
}

export const authReducer = (state=init,action)=>{
    switch(action.type){
        case LOGINRESPONSE:
            console.log(action.payload);
          return {
            ...state, 
            user:action.payload,
            isLoggedIn:true,
            error:null
          }
        case LOGINERROR:
            console.log(action.payload);
            return {
                ...state,
                error:action.payload
            }
        case VALIDATETOKENRESPONSE:
            console.log(action.payload.valideToken);
            return {
                ...state,
                user:action.payload.user,
                isValideToken:action.payload.valideToken
            }
        default:
            return state
    }
}