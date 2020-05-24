import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import signUpTutorado, * as signUpTutoradoSelectors from './signUpTutorado';
import signUpTutor, * as signUpTutorSelectors from './signUpTutor';
import tutorias, * as tutoriasSelectors from './tutorias'
const reducer = combineReducers({ 
  auth,
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


export const getIsSigningUpTutorado = state => signUpTutoradoSelectors.getIsSigningUp(state.signUpTutorado);
export const getSignUpErrorTutorado = state => signUpTutoradoSelectors.getSignUpError(state.signUpTutorado);

export const getIsSigningUpTutor = state => signUpTutorSelectors.getIsSigningUp(state.signUpTutor);
export const getSignUpErrorTutor = state => signUpTutorSelectors.getSignUpError(state.signUpTutor);

export const getTutoria = (state, id) => tutoriasSelectors.getTutoria(state.tutorias , id)
export const getTutorias = (state) => tutoriasSelectors.getTutoria(state.tutorias )
export const isFetchingTutorias = (state) => tutoriasSelectors.getTutoria(state.tutorias )
export const getTutoriaError = (state) => tutoriasSelectors.getTutoria(state.tutorias )
