import { all } from "redux-saga/effects";
import { loginSaga, logoutSaga, registerSaga, validetTokenSaga } from "./authentication-state/authenticationSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
        validetTokenSaga(),
        logoutSaga(),
    ]);
}