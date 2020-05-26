import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/signUpTutorado';
import * as types from '../types/signUpTutorado';

import * as http from '../utils/http';

import {
    API_BASE_URL,
} from '../settings';


function* signUpTutorado(action){
    try{
        const userResponse = yield call(
            fetch,
            `${API_BASE_URL}/users/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers:{
                'Content-Type': 'application/json',
                },
            },
        );
        console.log('HOla',action.payload)
        if(http.isSuccessful(userResponse.status)){
            const jsonResult = yield userResponse.json();
            yield put(actions.completeSignUpTutorado());
        } else {
            const {non_field_errors} = yield userResponse.json();
            yield put(actions.failSignUpTutorado(non_field_errors[0]));
        }

    } catch (error) {
        yield put(actions.failSignUpTutorado('Connection failed!'));
    }
};


export function* watchSignUpTutoradoStarted() {
    yield takeEvery(
        types.SIGN_UP_TUTORADO_STARTED,
        signUpTutorado,
    );
}

