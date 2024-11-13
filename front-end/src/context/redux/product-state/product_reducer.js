import { GETPRODUCTS, GETPRODUCTSRESPONSE,FINDPRODUCTRESPONSE } from "../constants";

const initialState = {
    products: [],
    loading: false,
    error: null,
    findedProduct:[]
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
        case FINDPRODUCTRESPONSE:
            // console.log(action.payload);
            // console.log(state.findedProduct);
            return {
                ...state,
                findedProduct: action.payload,        
            };

        default:
            return state;
    }
};