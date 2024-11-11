import { call, put, takeLatest } from "redux-saga/effects";
import { getProductRequest } from "./api";
import { GETPRODUCTS, GETPRODUCTSRESPONSE } from "../constants";

function * getProduct(action){
    try{
        let response = yield call(getProductRequest, action.payload);
        // console.log(action.payload);
        console.log(response.data);
        yield put({type:GETPRODUCTSRESPONSE,payload:response.data})
    }
    catch(err){
      console.log(err)
    }
}

export function* getProductSaga(){
    yield takeLatest(GETPRODUCTS,getProduct)
 }