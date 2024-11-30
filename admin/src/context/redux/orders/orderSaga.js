import { put, takeLatest,call } from 'redux-saga/effects';
import { getOrdersRequest } from './api';
import { GETORDERS,GETORDERRESPONSE } from '../constants';

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

export function* orderSaga (){

  yield takeLatest(GETORDERS, getOrders)

};