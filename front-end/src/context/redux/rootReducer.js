import { combineReducers } from "redux";
import { authenticationData } from "./authentication-state/authenticationReducer";
import { productData } from "./product-state/product_reducer";
export default combineReducers({
    authenticationData,
    productData,
});