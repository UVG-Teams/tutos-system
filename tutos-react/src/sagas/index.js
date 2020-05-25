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
  watchFetchConversations,
  watchAddConversation,
  watchRemoveConversation,
} from './conversations';

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
    fork(watchDeleteTutorias),
    fork(watchFetchConversations),
    fork(watchAddConversation),
    fork(watchRemoveConversation),
    fork(watchFetchMessages),
    fork(watchAddMessage),
    fork(watchRemoveMessage),
  ]);
}


export default mainSaga;
