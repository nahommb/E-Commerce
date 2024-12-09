import { CHANGEPASSWORDRESPONSE } from "../constants"


const initState = {
    user: {},
    isLoading: false,
    error: null,
    message: '',
}

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        
        case CHANGEPASSWORDRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}