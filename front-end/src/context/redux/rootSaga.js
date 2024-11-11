import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga, registerSaga, validetTokenSaga } from "./authentication-state/authenticationSaga";
import { getProductSaga } from "./product-state/product_saga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
        validetTokenSaga(),
        logoutSaga(),
        getProductSaga(),
    ]);
}