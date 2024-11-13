import { ADDTOCART,REMOVEFROMCART } from "../constants";

const initialState = {
    cart: [],
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            // console.log(action.payload)
           
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVEFROMCART:
            // console.log(action.payload)
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id),
            };
        // case "CLEAR_CART":
        //     return {
        //         ...state,
        //         cart: [],
        //     };
        default:
            return state;
    }
};