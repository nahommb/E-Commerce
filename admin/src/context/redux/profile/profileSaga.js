import {takeEvery,call,put} from 'redux-saga/effects'
import { CHANGEPASSWORD, CHANGEPASSWORDRESPONSE } from "../constants"
import { changePasswordRequest } from './api'

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

export function* changePasswordSaga(){
    yield takeEvery(CHANGEPASSWORD,changePassword)
}