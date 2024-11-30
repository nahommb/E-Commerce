import { all } from "redux-saga/effects";
import { addProductSaga, getProductSaga} from "./products/productsSaga";
import { orderSaga } from "./orders/orderSaga";

export default function* rootSaga() {
    yield all([
     addProductSaga(),
     getProductSaga(),
     orderSaga(),
    ]);
}