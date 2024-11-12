import { GETPRODUCTS, GETPRODUCTSRESPONSE } from "../constants";

const initialState = {
    products: [],
    loading: false,
    error: null,
};
export const productData = (state = initialState, action) => {
    switch (action.type) {
        case GETPRODUCTSRESPONSE:
            console.log(action.payload);
            // console.log(products);
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};