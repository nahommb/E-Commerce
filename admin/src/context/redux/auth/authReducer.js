import { LOGINERROR, LOGINRESPONSE, VALIDATETOKENRESPONSE } from "../constants"

const init = {
    isLoggedIn:false,
    user:null,
    error:null
}

export const authReducer = (state=init,action)=>{
    switch(action.type){
        case LOGINRESPONSE:
            console.log(action.payload);
          return {
            ...state,
            user:action.payload,
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
                isLoggedIn:action.payload.valideToken
            }
        default:
            return state
    }
}