import { CHANGENAMERESPONSE, CHANGEPASSWORDRESPONSE,CHANGEEMAILRESPONSE } from "../constants"


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
        case CHANGENAMERESPONSE:
            console.log(action.payload)
            return {
                ...state,
                message: action.payload.message
            }
        case CHANGEEMAILRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                message: action.payload.message
            }
        case 'CLEAR_MESSAGE':
            console.log('clear')
        return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}