import {call,put,takeLatest} from 'redux-saga/effects'
import { getNumberOfUsersRequest,getNumberOfProductsSoldRequest, getDeliveredAndNotDeliveredRequest, getMostSoldCategoryRequest, getNumberOfUserVistedrequest } from './api'
import { NUMBEROFPRODUCTSSOLDRESPONSE, NUMBEROFUSERS, NUMBEROFUSERSRESPONSE,NUMBEROFPRODUCTSSOLD, DELIVEREDANDNOTDELIVEREDRESPONSE,DELIVEREDANDNOTDELIVERED, MOSTSOLDCATEGORYRESPONSE, MOSTSOLDCATEGORY, USERVISTEDRESPONSE, USERVISTED } from '../constants'


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

function* getDeliveredAndNotDelivered(){
    try{
    const response = yield call(getDeliveredAndNotDeliveredRequest)
    console.log(response.data)
    yield put({type:DELIVEREDANDNOTDELIVEREDRESPONSE,payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}


function* getMostSoldCategory(){
    try{
    const response = yield call(getMostSoldCategoryRequest)
    console.log(response.data)
    yield put({type:MOSTSOLDCATEGORYRESPONSE,payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

function* getUserVisted(){
    try{
    const response = yield call(getNumberOfUserVistedrequest)
    yield put({type:USERVISTEDRESPONSE,payload:response.data.vistors})
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

export function* getDeliveredAndNotDeliveredSaga(){
    yield takeLatest(DELIVEREDANDNOTDELIVERED,getDeliveredAndNotDelivered)
}

export function* getMostSoldCategorySaga(){
    yield takeLatest(MOSTSOLDCATEGORY,getMostSoldCategory)
}
export function* getUserVistedSaga(){
    yield takeLatest(USERVISTED,getUserVisted)
}