import { ADDTOCART } from "../constants";

const initialState = {
    cart: [],
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOCART:
            console.log(action.payload)
           
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        // case "REMOVE_FROM_CART":
        //     return {
        //         ...state,
        //         cart: state.cart.filter((item) => item.id !== action.payload),
        //     };
        // case "CLEAR_CART":
        //     return {
        //         ...state,
        //         cart: [],
        //     };
        default:
            return state;
    }
};