import { put, takeLatest,call } from 'redux-saga/effects';
import { loginRequest,validetTokenRequest } from './api';
import { LOGINRESPONSE, LOGIN_REQUEST, VALIDATETOKENRESPONSE,VALIDATETOKEN } from '../constants';

function* login(action){
    try{
        console.log(action.payload)
        let response = yield call(loginRequest, action.payload);
        console.log(response.data);

        yield put({type:LOGINRESPONSE,payload:action.payload})
    }catch(error){
        console.log(error.response.data);
    }
}

function* validateToken(action){
    try{
        let response = yield call(validetTokenRequest, action.payload);
        console.log(response.data);

        yield put({type:VALIDATETOKENRESPONSE,payload:response.data})
    }catch(error){
        console.log(error.response.data);
    }
}

export function* loginSaga(){

    yield takeLatest(LOGIN_REQUEST,login)
}

export function* validateTokenSaga(){

    yield takeLatest(VALIDATETOKEN,validateToken)
}