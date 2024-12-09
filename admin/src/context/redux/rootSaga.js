import { all } from "redux-saga/effects";
import { addProductSaga, getProductSaga} from "./products/productsSaga";
import { orderSaga } from "./orders/orderSaga";
import { loginSaga,validateTokenSaga } from "./auth/authSaga";
import { changePasswordSaga } from "./profile/profileSaga";
export default function* rootSaga() {
    yield all([
     addProductSaga(),
     getProductSaga(),
     orderSaga(),
     loginSaga(),
     validateTokenSaga(),
     changePasswordSaga()
    ]);
}