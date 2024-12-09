import { combineReducers } from "redux";
import { productsReducer } from "./products/productsReducer";
import { orderData } from "./orders/orderReducer";
import { authReducer } from "./auth/authReducer";
import { profileReducer } from "./profile/profileReducer";

export default combineReducers({
   productsReducer,
   orderData,
   authReducer,
   profileReducer,
});