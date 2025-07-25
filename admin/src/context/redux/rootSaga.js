import { all } from "redux-saga/effects";
import { addProductSaga, deleteProductSaga, getProductSaga} from "./products/productsSaga";
import { assignDeliverySaga,orderSaga,readyOrderSaga,deliverdSaga } from "./orders/orderSaga";
import { loginSaga,logoutSaga,validateTokenSaga} from "./auth/authSaga";
import { changePasswordSaga,changeNameSaga,changeSiteDataSaga } from "./profile/profileSaga";
import { getDeliveredAndNotDeliveredSaga, getMostSoldCategorySaga, getNumberOfProductsSoldSaga, getNumberOfUsersSaga, getUserVistedSaga } from "./analytics/analyticsSaga";
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
     deleteProductSaga(),
     assignDeliverySaga(),
     readyOrderSaga(),
     deliverdSaga(),
     getNumberOfUsersSaga(),
     getNumberOfProductsSoldSaga(),
     getDeliveredAndNotDeliveredSaga(),
     getMostSoldCategorySaga(),
     getUserVistedSaga(),
     changeSiteDataSaga(),
    ]);
}