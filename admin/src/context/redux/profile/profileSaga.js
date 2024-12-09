import {takeEvery,call,put} from 'redux-saga/effects'
import { CHANGEPASSWORD, CHANGEPASSWORDRESPONSE,CHANGENAME,CHANGENAMERESPONSE } from "../constants"
import { changeNameRequest, changePasswordRequest } from './api'

function* changePassword(action){
    try{
    const response = yield call(changePasswordRequest,action.payload)
    console.log(response)

    yield put({type: CHANGEPASSWORDRESPONSE,payload: response.data})
    }
   catch(error){
    console.log(error)
   }
}

function* changeName(action){
    try{
    const response = yield call(changeNameRequest,action.payload)
    console.log(response)

    yield put({type: CHANGENAMERESPONSE,payload: response.data})
    }
   catch(error){
    console.log(error)
   }
}

export function* changePasswordSaga(){
    yield takeEvery(CHANGEPASSWORD,changePassword)
}

export function* changeNameSaga(){
    yield takeEvery(CHANGENAME,changeName)
}