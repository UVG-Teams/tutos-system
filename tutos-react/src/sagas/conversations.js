import {
    call,
    takeEvery,
    select,
    put,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as types from '../types/conversations';
import * as actions from '../actions/conversations';
import * as selectors from '../reducers';
import * as schemas from '../schemas/conversations';

import * as http from '../utils/http';
import {
    API_BASE_URL,
} from '../settings';

function* fetchConversations(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/conversations/`,
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
                    entities: { conversations },
                    result,
                } = normalize(jsonResult, schemas.conversations);
                yield put(actions.completeFetchingConversations(conversations, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failFetchingConversations(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failFetchingConversations('Connection failed!'));
    }
}

export function* watchFetchConversations() {
    yield takeEvery(
        types.FETCH_CONVERSATIONS_STARTED,
        fetchConversations,
    );
}

function* addConversation(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/conversations/`,
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
                yield put(actions.completeAddingConversation(
                    action.payload.conversation.id,
                    jsonResult,
                ));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failAddingConversation(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failAddingConversation('Connection failed!'));
    }
}

export function* watchAddConversation() {
    yield takeEvery(
        types.ADD_CONVERSATION_STARTED,
        addConversation,
    );
}

function* removeConversation(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
            const token = yield select(selectors.getToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/conversations/${action.payload.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    }
                }
            );

            if (http.isSuccessful(response.status)) {
                yield put(actions.completeRemovingConversation());
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failRemovingConversation(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failRemovingConversation('Connection failed!'));
    }
}

export function* watchRemoveConversation() {
    yield takeEvery(
        types.REMOVE_CONVERSATION_STARTED,
        removeConversation,
    );
}
