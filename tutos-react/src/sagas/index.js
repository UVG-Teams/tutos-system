import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
} from './auth';

import {
  watchFetchMessages,
  watchAddMessage,
  watchRemoveMessage,
} from './messages';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchFetchMessages),
    fork(watchAddMessage),
    fork(watchRemoveMessage),
  ]);
}


export default mainSaga;
