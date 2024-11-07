import { LOGINRESPONSE, REGISTER, REGISTERRESPONSE, VALIDATETOKENRESPONSE } from "../constants";

const initialState = {
    isRegistered:false,
    user:null,
    valideToken:false,
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
            // console.log(action.payload.updatedUser);
            localStorage.setItem('token',action.payload.updatedUser.refreshToken);
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

        default:
            return state;
    }
}