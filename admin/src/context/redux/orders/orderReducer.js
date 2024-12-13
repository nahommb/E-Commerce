import { ASSIGNDELIVERYRESPONSE, GETORDERRESPONSE, GETREADYORDERSRESPONSE } from "../constants";;

const initialState = {
    orders: [],
    order_page: 1,
    readyOrders: [],
};

export const orderData = (state = initialState, action) => {
    switch (action.type) {
        case GETORDERRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                orders: action.payload,
               
            };
        case GETREADYORDERSRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                readyOrders: action.payload,
            };
        // case ASSIGNDELIVERYRESPONSE:
        //     return {
        //         ...state,
                
        //     }
        default:
            return state;
    }

};