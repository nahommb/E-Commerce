import { put, takeLatest,call } from 'redux-saga/effects';
import { assignDeliveryRequest, getOrdersRequest } from './api';
import { GETORDERS,GETORDERRESPONSE, ASSIGNDELIVERYRESPONSE, ASSIGNDELIVERY } from '../constants';

function* getOrders(action) {
  try {
    let response =  yield call (getOrdersRequest, action.payload);
    
    console.log(response.data);

    yield put({ type: GETORDERRESPONSE, payload: response.data });
  } 
  catch (error) {
    console.error(error);
  }
}

function* assignDelivery(action){
  try{
  let response = yield call(assignDeliveryRequest,action.payload)

  console.log(response.data)
  yield put({type:ASSIGNDELIVERYRESPONSE,payload:response.data})
  }
  catch(err){
   console.log(err.response.data)
  }
}

export function* orderSaga (){

  yield takeLatest(GETORDERS, getOrders)

};

export function* assignDeliverySaga(){
  yield takeLatest(ASSIGNDELIVERY,assignDelivery)
}