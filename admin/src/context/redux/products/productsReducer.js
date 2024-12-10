import { ADDPRODUCTS,DELETEPRODUCTSRESPONSE ,ADDPRODUCTSRESPONSE ,GETALLPRODUCTS, GETALLPRODUCTSRESPONSE} from "../constants"

const initalState = {
    products: [],
    isUploaded: false,
    deletedResponse:null,
    
}

export const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADDPRODUCTSRESPONSE:

            console.log(action.payload)
            return {
                ...state,
                isUploaded: action.payload.message === 'Successfully uploaded' ? true : false
            }
         case GETALLPRODUCTSRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                products: action.payload
            }
        case DELETEPRODUCTSRESPONSE:
            console.log(action.payload)
            return {
                ...state,
                deletedResponse: action.payload.message
            }
        
        default:
            return state
    }
}