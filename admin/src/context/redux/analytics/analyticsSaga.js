import {call,put,takeLatest} from 'redux-saga/effects'
import { getNumberOfUsersRequest } from './api'
import { NUMBEROFUSERS, NUMBEROFUSERSRESPONSE } from '../constants'


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

export function* getNumberOfUsersSaga(){

    yield takeLatest(NUMBEROFUSERS,getNumberOfUsers)
}