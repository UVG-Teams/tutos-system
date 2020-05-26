import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import conversations, * as conversationsSelectors from './conversations';
import messages, * as messagesSelectors from './messages';
import favTutores, * as favTutoresSelectors from './tutores';
import signUpTutorado, * as signUpTutoradoSelectors from './signUpTutorado';
import signUpTutor, * as signUpTutorSelectors from './signUpTutor';
import tutorias, * as tutoriasSelectors from './tutorias'
const reducer = combineReducers({ 
  auth,
  conversations,
  messages,
  favTutores,
  signUpTutorado,
  tutorias
});

export default reducer;



export const getToken = state => authSelectors.getToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);

export const getConversation = (state, id) => conversationsSelectors.getConversation(state.conversations, id);
export const getConversations = state => conversationsSelectors.getConversations(state.conversations);
export const isFetchingConversations = state => conversationsSelectors.isFetchingConversations(state.conversations);
export const getConversationError = state => conversationsSelectors.getConversationError(state.conversations);

export const getMessage = (state, id) => messagesSelectors.getMessage(state.messages, id);
export const getMessages = state => messagesSelectors.getMessages(state.messages);
export const isFetchingMessages = state => messagesSelectors.isFetchingMessages(state.messages);
export const getMessageError = state => messagesSelectors.getMessageError(state.messages);

export const getFavTutor = state => favTutoresSelectors.getFavTutor(state.favTutores, id);
export const getFavTutores = state => favTutoresSelectors.getFavTutores(state.favTutores);
export const isFetchigFavTutores = state => favTutoresSelectors.isFetchingFavTutores(state.favTutores);
export const getFavTutorError = state => favTutoresSelectors.getFavTutorError(state.favTutores);

export const getIsSigningUpTutorado = state => signUpTutoradoSelectors.getIsSigningUp(state.signUpTutorado);
export const getSignUpErrorTutorado = state => signUpTutoradoSelectors.getSignUpError(state.signUpTutorado);

export const getIsSigningUpTutor = state => signUpTutorSelectors.getIsSigningUp(state.signUpTutor);
export const getSignUpErrorTutor = state => signUpTutorSelectors.getSignUpError(state.signUpTutor);

export const getTutoria = (state, id) => tutoriasSelectors.getTutoria(state.tutorias , id)
export const getTutorias = (state) => tutoriasSelectors.getTutorias(state.tutorias )
export const isFetchingTutorias = (state) => tutoriasSelectors.isFetchingTutorias(state.tutorias )
export const getTutoriaError = (state) => tutoriasSelectors.getTutoriaError(state.tutorias )

export const getTutoriaStatus = (state, id) => tutoriasSelectors.getTutoriaStatus(state.tutorias, id)