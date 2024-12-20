import { combineReducers } from "redux";
import { authenticationData } from "./authentication-state/authenticationReducer";
import { productData } from "./product-state/product_reducer";
import { cartReducer } from "./cart-state/cart_reducer";
import { orderData } from "./order-state/orderReducer";

export default combineReducers({
    authenticationData,
    productData,
    cartReducer,
    orderData,
});