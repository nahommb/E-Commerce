import { GETORDERRESPONSE } from "../constants";;

const initialState = {
    orders: [],
    order_page: 1,
};

export const orderData = (state = initialState, action) => {
    switch (action.type) {
        case GETORDERRESPONSE:
            console.log(action.payload);
            return {
                ...state,
                orders: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};