import {call,put,takeLatest} from 'redux-saga/effects'
import { getNumberOfUsersRequest,getNumberOfProductsSoldRequest } from './api'
import { NUMBEROFPRODUCTSSOLDRESPONSE, NUMBEROFUSERS, NUMBEROFUSERSRESPONSE,NUMBEROFPRODUCTSSOLD } from '../constants'


function* getNumberOfUsers(){
    try{
    const response = yield call(getNumberOfUsersRequest)
    console.log(response.data)
    yield put({type:NUMBEROFUSERSRESPONSE,payload:response.data})
    }
    catch(error){
        console.log(error)
    }
    
}

function* getNumberOfProductsSold(){
    try{
    const response = yield call(getNumberOfProductsSoldRequest)
    console.log(response.data)
    yield put({type:NUMBEROFPRODUCTSSOLDRESPONSE,payload:response.data})
    }
    catch(error){
        console.log(error)
    }

}

export function* getNumberOfUsersSaga(){

    yield takeLatest(NUMBEROFUSERS,getNumberOfUsers)
}

export function* getNumberOfProductsSoldSaga(){
    yield takeLatest(NUMBEROFPRODUCTSSOLD,getNumberOfProductsSold)
}
