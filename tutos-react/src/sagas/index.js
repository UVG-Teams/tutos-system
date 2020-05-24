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

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchGetTutorias),
    fork(watchAddTutorias),
    fork(watchDeleteTutorias)
  ]);
}


export default mainSaga;
