import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga, registerSaga, validetTokenSaga } from "./authentication-state/authenticationSaga";
import { findProductSaga, getProductSaga } from "./product-state/product_saga";
import { orderSaga } from "./order-state/orderSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
        validetTokenSaga(),
        logoutSaga(),
        getProductSaga(),
        findProductSaga(),
        orderSaga(),
    ]);
}