import { call, put, takeLatest } from "redux-saga/effects";
import { CREATEORDER, CREATEORDERRESPONSE } from "../constants";
import { createOrderRequest } from "./api";


function* order(action){
    try{
        let response = yield call(createOrderRequest, action.payload);
        console.log(action.payload);
        console.log(response.data);
        yield put({type:CREATEORDERRESPONSE ,payload:response.data})
    }catch(error){
        console.log(error);
    }
}

export function* orderSaga(){
    yield takeLatest(CREATEORDER,order)
 
 }