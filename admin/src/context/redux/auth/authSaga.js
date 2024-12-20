import { put, takeLatest,call } from 'redux-saga/effects';
import { loginRequest,logoutRequest,validetTokenRequest } from './api';
import { LOGINRESPONSE, LOGOUT,LOGINERROR,LOGIN_REQUEST, VALIDATETOKEERORRNRESPONSE,VALIDATETOKENRESPONSE,VALIDATETOKEN } from '../constants';

function* login(action){
    try{
        console.log(action.payload)
        let response = yield call(loginRequest, action.payload);
        console.log(response.data);

        yield put({type:LOGINRESPONSE,payload:action.payload})
    }catch(error){
        yield put({type:LOGINERROR,payload:error.response.data})
        console.log(error.response.data);
    }
}

function* validateToken(action){
    try{
        let response = yield call(validetTokenRequest, action.payload);
        console.log(response.data);

        yield put({type:VALIDATETOKENRESPONSE,payload:response.data})
    }catch(error){

        yield put({type:VALIDATETOKEERORRNRESPONSE,payload:error.response.data})
        console.log(error.response.data);
    }
}  

function* logout(action){
    try{
     let response = yield call(logoutRequest, action.payload);
     console.log(response.data);

    }
    catch(error){
        console.log(error.response.data);
    }
}
export function* loginSaga(){

    yield takeLatest(LOGIN_REQUEST,login)
}

export function* validateTokenSaga(){

    yield takeLatest(VALIDATETOKEN,validateToken)
}

export function* logoutSaga(){
    yield takeLatest(LOGOUT,logout)
}