import {
    call,
    takeEvery,
    select,
    put,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as types from '../types/messages';
import * as actions from '../actions/messages';
import * as selectors from '../reducers';
import * as schemas from '../schemas/messages';

import * as http from '../utils/http';
import {
    API_BASE_URL,
} from '../settings';

function* fetchMessages(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/messages/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            );

            if (http.isSuccessful(response.status)) {
                const jsonResult = yield response.json();
                const {
                    entities: { messages },
                    result,
                } = normalize(jsonResult, schemas.messages);
                yield put(actions.completeFetchingMessages(messages, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failFetchingMessages(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failFetchingMessages('Connection failed!'));
    }
}

export function* watchFetchMessages() {
    yield takeEvery(
        types.FETCH_MESSAGES_STARTED,
        fetchMessages,
    );
}

function* addMessage(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/messages/`,
                {
                    method: 'POST',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            );

            if (http.isSuccessful(response.status)) {
                const jsonResult = yield response.json();
                yield put(actions.completeAddingMessage(
                    action.payload.message.id,
                    jsonResult,
                ));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failAddingMessage(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failAddingMessage('Connection failed!'));
    }
}

export function* watchAddMessage() {
    yield takeEvery(
        types.ADD_MESSAGE_STARTED,
        addMessage,
    );
}

function* removeMessage(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/messages/${action.payload.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            );

            if (http.isSuccessful(response.status)) {
                yield put(actions.completeRemovingMessage());
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failRemovingMessage(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failRemovingMessage('Connection failed!'));
    }
}

export function* watchRemoveMessage() {
    yield takeEvery(
        types.REMOVE_MESSAGE_STARTED,
        removeMessage,
    );
}
