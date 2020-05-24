import {
    call,
    takeEvery,
    select,
    put,
} from 'redux-saga/effects';

import * as types from './../types/tutorias'
import * as selectors from '../reducers/index'
import * as actions from './../actions/tutorias'
import { normalize } from 'normalizr';
import * as http from '../utils/http';
import * as schemas from './../schemas/tutorias'
import {
    API_BASE_URL,
} from '../settings';

function* getTutorias(action){
    try{
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth){
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/tutorias/`,
                {
                    method: 'GET',
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authentication': `JWT ${token}`,
                    }
                }
            )
            if(http.isSuccessful(response.status)){
                const jsonResult = yield response.json();
                const {
                    entities: { tutorias }, 
                    result,
                } = normalize(jsonResult, schemas.tutorias)
                yield put (actions.completeGetTutos(tutorias, result))
            }else{
                const {non_field_errors } = yield response.json()
                yield put(actions.failGetTutos(non_field_errors[0]))
            }
        }
    }catch(error){
        yield put(actions.failGetTutos('Connection error!'))
    }
}

export function* watchGetTutorias(){
    yield takeEvery(
        types.GET_TUTOS_STARTED,
        getTutorias
    )
}

function* addTutorias(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/tutorias/`,
                {
                    method: 'POST',
                    body : JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authentication': `JWT ${token}`,
                    },
                }
            )
            if (http.isSuccessful(response.status)) {
                const jsonResult = yield response.json();
                yield put(actions.completeAddTutoria(
                    action.payload.id, 
                    jsonResult
                ))
            } else {
                const { non_field_errors } = yield response.json()
                yield put(actions.failAddTutoria(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failGetTutos('Connection error!'))
    }
}

export function* watchAddTutorias() {
    yield takeEvery(
        types.ADD_TUTO_STARTED,
        addTutorias
    )
}

function* deleteTutorias(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth) {
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/tutorias/${action.payload.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authentication': `JWT ${token}`,
                    },
                }
            )
            if (http.isSuccessful(response.status)) {
                yield put(actions.completeDeleteTutoria())
            } else {
                const { non_field_errors } = yield response.json()
                yield put(actions.failDeleteTutoria(non_field_errors[0]))
            }
        }
    } catch (error) {
        yield put(actions.failGetTutos('Connection error!'))
    }
}

export function* watchDeleteTutorias() {
    yield takeEvery(
        types.DELETE_TUTOS_STARTED,
        deleteTutorias
    )
}