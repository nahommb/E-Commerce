import { ADDPRODUCTS, ADDPRODUCTSRESPONSE } from "../constants"

const initalState = {
    products: [],
    isUploaded: false
}

export const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADDPRODUCTSRESPONSE:

            console.log(action.payload)
            return {
                ...state,
                products: action.payload,
                isUploaded: action.payload.message === 'Successfully uploaded' ? true : false
            }
        
        default:
            return state
    }
}