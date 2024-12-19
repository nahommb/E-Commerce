import { ADDPRODUCTS,DELETEPRODUCTSRESPONSE ,ADDPRODUCTSRESPONSE ,GETALLPRODUCTS, GETALLPRODUCTSRESPONSE, ADDPRODUCTERROR} from "../constants"

const initalState = {
    products: [],
    isUploaded: false,
    deletedResponse:null,
    isLoading:false
}

export const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADDPRODUCTS:
            return {
                isLoading:true
            }
        case ADDPRODUCTSRESPONSE:

            console.log(action.payload)
            return {
                ...state,
                isUploaded: action.payload.message === 'Successfully uploaded' ? true : false,
                isLoading:false
            }
        case ADDPRODUCTERROR :
            return {
                isLoading:false
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