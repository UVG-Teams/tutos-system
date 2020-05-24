import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
} from './auth';
import {
    watchGetTutorias,
    watchAddTutorias,
    watchDeleteTutorias
} from './tutorias'

import {
  watchFetchMessages,
  watchAddMessage,
  watchRemoveMessage,
} from './messages';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchGetTutorias),
    fork(watchAddTutorias),
    fork(watchDeleteTutorias)
    fork(watchFetchMessages),
    fork(watchAddMessage),
    fork(watchRemoveMessage),
  ]);
}


export default mainSaga;
