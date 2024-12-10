import { call, put ,takeEvery,takeLatest} from "redux-saga/effects";
import { addProductRequest, getProductRequest,deleteProductRequest } from "./api";
import { ADDPRODUCTS, ADDPRODUCTSRESPONSE,DELETEPRODUCTS,DELETEPRODUCTSRESPONSE, GETALLPRODUCTS ,GETALLPRODUCTSRESPONSE } from "../constants";

function * addProduct(action){
    try{
        console.log(action.payload);
        let response = yield call(addProductRequest, action.payload);
      
        console.log(response.data);
        yield put({type:ADDPRODUCTSRESPONSE,payload:response.data})
    }
    catch(err){
      console.log(err)
      yield put({type:ADDPRODUCTSRESPONSE,payload:err})
    }
}

function* getProduct(action){
    try{
        let response = yield call(getProductRequest, action.payload);

         console.log(response.data);
        yield put({type:GETALLPRODUCTSRESPONSE,payload:response.data})
    }
    catch(err){
      console.log(err)
    //   yield put({type:ADDPRODUCTSRESPONSE,payload:err})
    }
}

function* deleteProduct(action){
    try{
        console.log(action.payload);
        let response = yield call(deleteProductRequest, action.payload);

        console.log(response.data);
        yield put({type:DELETEPRODUCTSRESPONSE,payload:response.data})
    }
    catch(err){
      console.log(err)
    }
} 

export function* getProductSaga(){
    yield takeEvery(GETALLPRODUCTS,getProduct)
 }

export function* addProductSaga(){
    yield takeLatest(ADDPRODUCTS,addProduct)
 }

 export function* deleteProductSaga(){
    yield takeLatest(DELETEPRODUCTS,deleteProduct)
 }