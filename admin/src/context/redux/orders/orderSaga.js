import { put, takeLatest,call } from 'redux-saga/effects';
import { assignDeliveryRequest, deliverdRequest, getOrdersRequest, getReadyOrdersRequest } from './api';
import { GETORDERS,GETORDERRESPONSE, ASSIGNDELIVERYRESPONSE, DELIVERD,ASSIGNDELIVERY, GETREADYORDERSRESPONSE, GETREADYORDERS, DELIVERDRESPONSE } from '../constants';

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

function* readyOrder(action){
  try{
    let response = yield call(getReadyOrdersRequest,action.payload)
    console.log(response.data)
    yield put({type:GETREADYORDERSRESPONSE,payload:response.data})
  }
  catch(err){ 
    console.log(err.response.data)
  }
}

function* deliverd(action){
  try{
    let response = yield call(deliverdRequest,action.payload)
    console.log(response.data)
    yield put({type:DELIVERDRESPONSE,payload:response.data})
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
export function* readyOrderSaga(){
  yield takeLatest(GETREADYORDERS,readyOrder)
}
export function* deliverdSaga(){
  yield takeLatest(DELIVERD,deliverd)
}