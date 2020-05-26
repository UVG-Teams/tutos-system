import{
    call,
    takeEvery,
    select,
    put,
}from 'redux-saga/effects';
import {normalize} from 'normalizr';

import * as types from '../types/tutores';
import * as actions from '../actions/tutores';
import * as selectors from '../reducers';
import * as schemas from '../schemas/favTutors';

import * as http from '../utils/http';
import{
    API_BASE_URL,
}from '../settings';

function* fetchFavTutors(action){
    try{
        const isAuth = yield select(selectors.isAuthenticated)
        if(isAuth){
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/favTutors/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            )
            if(http.isSuccessful(response.status)){
                const jsonResult = yield response.json();
                const {
                    entitie:{favTutors},
                    result,
                } = normalize(jsonResult, schemas.favTutors);
                yield put(actions.completeFetchingFavTutor(schemas.favTutors, result));
            }else{
                const {non_field_errors} = yield response.json;
                yield put(actions.failFetchingFavTutor(non_field_errors[0]));
            }
        }
    } catch (error){
        yield put(actions.failFetchingFavTutor('Connection failed!'))
    }

}
export function* watchFetchFavTutors(){
    yield takeEvery(
        types.FETCH_FAVORITE_TUTORS_STARTED,
        fetchFavTutors,
    )
}

function* addFavTutor(action){
    try{
        const isAuth = yield select(selectors.isAuthenticated)
        if(isAuth){
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/favTutors/`,
                {
                    method: 'POST',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            )
            if(http.isSuccessful(response.status)){
                const jsonResult = yield response.json();
                yield put(actions.completeAddingFavTutor(
                    action.payload.favTutor.id, 
                    jsonResult,
                    ));
            }else{
                const {non_field_errors} = yield response.json;
                yield put(actions.failAddingFavTutor(non_field_errors[0]));
            }
        }
    } catch (error){
        yield put(actions.failAddingFavTutor('Connection failed!'))
    }
}

export function* watchAddFavTutor(){
    yield takeEvery(
        types.ADD_FAVORITE_TUTOR_STARTED,
        addFavTutor,
    )
}

function* removeFavTutor(action){
    try{
        const isAuth = yield select(selectors.isAuthenticated)
        if(isAuth){
            const token = yield select(selectors.getToken)
            const response = yield call(
                fetch,
                `${API_BASE_URL}/favTutors/${action.payload.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            )
            if(http.isSuccessful(response.status)){
                yield put(actions.completeRemovingFavTutor());
            }else{
                const {non_field_errors} = yield response.json;
                yield put(actions.failRemovingFavTutor(non_field_errors[0]));
            }
        }
    } catch (error){
        yield put(actions.failRemovingFavTutor('Connection failed!'))
    }
}

export function* watchRemoveFavTutor(){
    yield takeEvery(
        types.REMOVE_FAVORITE_TUTOR_STARTED,
        removeFavTutor,
    )
}