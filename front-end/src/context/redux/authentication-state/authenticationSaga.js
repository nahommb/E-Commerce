import { REGISTER, REGISTERRESPONSE,LOGIN,LOGINRESPONSE, VALIDATETOKEN, VALIDATETOKENRESPONSE, LOGOUT, LOGINERROR, REGISTERERROR } from "../constants";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, registerRequest, validetTokenRequest, logoutRequest} from "./api";

function* register(action){
    try{
        let response = yield call(registerRequest, action.payload);
        
        console.log(response.data);
        yield put({type:REGISTERRESPONSE,payload:response.data})
    }catch(error){
        yield put({type:REGISTERERROR,payload:error.response.data})
        console.log(error);
    }
}


function* login(action){
    try{
        let response = yield call(loginRequest, action.payload);
       
        yield put({type:LOGINRESPONSE,payload:response.data})
    }catch(error){
     
        yield put({type:LOGINERROR,payload:error.response.data})
    }
}

function* validetToken(action){
    try{
        let response = yield call(validetTokenRequest, action.payload);
       
        yield put({type:VALIDATETOKENRESPONSE,payload:response.data})
    }catch(error){
        console.log(error);
    }
}

function* logout(action){
    try{
        let response = yield call(logoutRequest, action.payload);
      
        // yield put({type:'',payload:response.data})
    }catch(error){
        console.log(error);
    }
}

export function* registerSaga(){
    yield takeLatest(REGISTER,register)
 
 }

 export function* loginSaga(){
    yield takeLatest(LOGIN,login)

 }

 export function* validetTokenSaga(){
    yield takeLatest(VALIDATETOKEN,validetToken)
 }
 export function* logoutSaga(){
    yield takeLatest(LOGOUT,logout)
 }
