import { call, put, takeLatest } from "redux-saga/effects";
import { findProductRequest, getProductRequest } from "./api";
import { FINDPRODUCTRESPONSE,FINDPRODUCT, GETPRODUCTS, GETPRODUCTSRESPONSE } from "../constants";

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
function * findProduct(action){
    try{
        let response = yield call(findProductRequest, action.payload);
      
        // console.log(response.data);
        yield put({type:FINDPRODUCTRESPONSE,payload:response.data})
    }
    catch(err){
      console.log(err)
    }
}
export function* getProductSaga(){
    yield takeLatest(GETPRODUCTS,getProduct)
 }
 export function* findProductSaga(){
    yield takeLatest(FINDPRODUCT,findProduct)
 }