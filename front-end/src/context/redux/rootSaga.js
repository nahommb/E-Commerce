import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga, registerSaga, validetTokenSaga,verifySaga } from "./authentication-state/authenticationSaga";
import { findProductSaga, getProductSaga, getRecentProductSaga, getSiteDataSaga } from "./product-state/product_saga";
import { orderSaga } from "./order-state/orderSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
        validetTokenSaga(),
        logoutSaga(),
        getProductSaga(),
        findProductSaga(),
        getRecentProductSaga(),
        orderSaga(),
        getSiteDataSaga(),
        verifySaga(),
    ]);
}