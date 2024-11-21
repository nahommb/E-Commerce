import { GETPRODUCTS, GETPRODUCTSRESPONSE,FINDPRODUCTRESPONSE } from "../constants";

const initialState = {
    products: [],
    loading: false,
    error: null,
    findedProduct:[],
    currentPageNumber:1,
    retroPageNumber:1,
    shopPageNumber:1,
    internationalPageNumber:1,
    othersPageNumber:1,
    kidsPageNumber:1,
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
        case 'PAGENUMBER':
            console.log(action.payload)
            return {
                ...state,
                currentPageNumber:action.payload
            }
        case 'RETROPAGENUMBER':
                console.log(action.payload)
                return {
                    ...state,
                    retroPageNumber:action.payload
                }
        case 'SHOPPAGENUMBER':
            console.log(action.payload)
            return {
                ...state,
                shopPageNumber:action.payload
            }
        case 'INTERNATIONALPAGENUMBER':
                console.log(action.payload)
                return {
                    ...state,
                    internationalPageNumber:action.payload
                }
        case 'OTHERSPAGENUMBER':
            console.log(action.payload)
            return {
                ...state,
                othersPageNumber:action.payload
            }
        case 'KIDSPAGENUMBER':
                console.log(action.payload)
                return {
                    ...state,
                    kidsPageNumber:action.payload
                }
        default:
            return state;
    }
};