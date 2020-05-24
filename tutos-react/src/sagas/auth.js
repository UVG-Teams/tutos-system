import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  // delay,
  select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/auth';
import * as types from '../types/auth';
import * as http from '../utils/http';
import {
  API_BASE_URL,
  validTimePercentage,
} from '../settings';


function* login(action) {
  try {
    const response = yield call(
        fetch,
        `${API_BASE_URL}/token-auth/`,
        {
          method: 'POST',
          body: JSON.stringify(action.payload),
          headers:{
            'Content-Type': 'application/json',
          },
        },
    );

    if (http.isSuccessful(response.status)) {
        const { token } = yield response.json();
        yield put(actions.completeLogin(token));
    } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failLogin(non_field_errors[0]));
    }
  } catch (error) {
      yield put(actions.failLogin('Connection failed!'));
  }
}

export function* watchLoginStarted() {
  yield takeEvery(
    types.AUTHENTICATION_STARTED,
    login,
  );
}

function* refreshToken(action) {
  const expiration = yield select(selectors.getAuthExpiration);
  const now =  parseInt(new Date().getTime() / 1000);
  const usedTimePercentage = now/expiration;

  if (usedTimePercentage > validTimePercentage) {
    try {
      const token = yield select(selectors.getToken);
      const response = yield call(
          fetch,
          `${API_BASE_URL}/token-refresh/`,
          {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers:{
              'Content-Type': 'application/json',
            },
          },
      );

      if (http.isSuccessful(response.status)) {
          const jsonResult = yield response.json();
          yield put(actions.completeTokenRefresh(jsonResult.token));
      } else {
          // TODO: poner un redirect al home (login)
          const { non_field_errors } = yield response.json();
          yield put(actions.failTokenRefresh(non_field_errors[0]));
      }
    } catch (error) {
        // TODO: poner un redirect al home (login)
        yield put(actions.failTokenRefresh('Falló horrible la conexión mano'));
    }
  }
}

export function* watchRefreshTokenStarted() {
  yield takeEvery(
    types.TOKEN_REFRESH_STARTED,
    refreshToken,
  );
}
