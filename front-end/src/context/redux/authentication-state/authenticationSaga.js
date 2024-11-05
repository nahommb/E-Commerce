import { REGISTER } from "../constants";
import { call, put, takeLatest } from "redux-saga/effects";
import { registerRequest } from "./api";

function* register(action){
    try{
        let response = yield call(registerRequest, action.payload);
        // console.log(action.payload);
        console.log(response.data.registerd);
        yield put({type:REGISTER,data:response.data})
    }catch(error){
        console.log(error);
    }
}

export function* registerSaga(){
    yield takeLatest(REGISTER,register)
 
 }