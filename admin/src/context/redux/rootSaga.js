import { all } from "redux-saga/effects";
import { addProductSaga } from "./products/productsSaga";

export default function* rootSaga() {
    yield all([
     addProductSaga(),
    ]);
}