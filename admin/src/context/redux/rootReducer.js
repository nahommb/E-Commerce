import { combineReducers } from "redux";
import { productsReducer } from "./products/productsReducer";
import { orderData } from "./orders/orderReducer";

export default combineReducers({
   productsReducer,
   orderData,
});