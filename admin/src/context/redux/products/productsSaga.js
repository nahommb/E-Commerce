import { call, put ,takeLatest} from "redux-saga/effects";
import { addProductRequest } from "./api";
import { ADDPRODUCTS, ADDPRODUCTSRESPONSE } from "../constants";

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
export function* addProductSaga(){
    yield takeLatest(ADDPRODUCTS,addProduct)
 }