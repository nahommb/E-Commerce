import{CLEARCART, CREATEORDERRESPONSE} from "../constants"

const initState = {
    order:{},
    order_success : false
}

export const orderData = (state=initState,action)=>{
     switch(action.type){
        case CREATEORDERRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                order:action.payload,
                order_success:action.payload.success,
            }
        case CLEARCART:
            return {
                ...state,
                order_success:false
            }
        default:
            return {
                ...state
            }
     }
}


