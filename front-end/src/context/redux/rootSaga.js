import { all } from "redux-saga/effects";
import { registerSaga } from "./authentication-state/authenticationSaga";

export default function* rootSaga() {
    yield all([
        registerSaga(),
    ]);
}