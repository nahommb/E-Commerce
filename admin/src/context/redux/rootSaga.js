import { all } from "redux-saga/effects";
import { addProductSaga, getProductSaga} from "./products/productsSaga";
import { orderSaga } from "./orders/orderSaga";
import { loginSaga,logoutSaga,validateTokenSaga } from "./auth/authSaga";
import { changePasswordSaga,changeNameSaga } from "./profile/profileSaga";
export default function* rootSaga() {
    yield all([
     addProductSaga(),
     getProductSaga(),
     orderSaga(),
     loginSaga(),
     validateTokenSaga(),
     changePasswordSaga(),
     changeNameSaga(),
     logoutSaga(),
    ]);
}