import { all } from "redux-saga/effects";
import { addProductSaga, getProductSaga } from "./products/productsSaga";

export default function* rootSaga() {
    yield all([
     addProductSaga(),
     getProductSaga(),
    ]);
}