import { combineReducers } from "redux";
import { authenticationData } from "./authentication-state/authenticationReducer";
export default combineReducers({
    authenticationData,
});