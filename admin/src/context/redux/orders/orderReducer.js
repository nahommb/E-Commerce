import { ASSIGNDELIVERY, ASSIGNDELIVERYRESPONSE, DELIVERD, DELIVERDRESPONSE, GETORDERRESPONSE, GETREADYORDERSRESPONSE } from "../constants";;

const initialState = {
    orders: [],
    order_page: 1,
    readyOrders: [],
    assignedForDelivery:false,
    delivered:false,
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
        case ASSIGNDELIVERY:
            return {
                ...state,
                assignedForDelivery: false,
            };
        case ASSIGNDELIVERYRESPONSE:
            return {
                ...state,
                assignedForDelivery: true,

            }
        case DELIVERD:
            return {
                ...state,
                delivered: false,
            }
        case DELIVERDRESPONSE:
            return {
                ...state,
                delivered: true,
            }
        default:
            return state;
    }

};