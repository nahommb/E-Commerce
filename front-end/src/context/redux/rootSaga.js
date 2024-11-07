import { all } from "redux-saga/effects";
import { loginSaga, registerSaga, validetTokenSaga } from "./authentication-state/authenticationSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
        loginSaga(),
        validetTokenSaga(),
    ]);
}