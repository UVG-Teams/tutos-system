import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    // delay,
    select,
} from 'redux-saga/effects';
import * as types from './../types/dashboardTutor'
import * as selectors from './../reducers/index'
import * as actions from './../actions/dashboardTutor'
import { normalize } from 'normalizr';

import {
    API_BASE_URL,
} from '../settings';

function* fetchTutos(actions) {
    try{    
        const isAuth = yield select(selectors.isAuthenticated)
        if (isAuth){
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/teams/`,//VER BIEN AQUI EL URL
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                },
            );
            if (http.isSuccesful(response.status)){
                const jsonResult = yield response.json()
                const {
                    entities: { teams },
                    result,
                } = normalize(jsonResult, schemas.teams)
                yield put (actions.completeGetTutos(teams /*,result*/))
            }else{
                const { non_field_errors } = yield response.json();
                yield put(actions.failGetTutos(non_field_errors[0]));

            }
        }
    }catch(error){
        yield put (actions.failGetTutos('Connection failed'))
    }
}

export function* watchFetchTutos() {
    yield takeEvery(
        types.START_GET_TUTOS,
        fetchTutos,
    );
}