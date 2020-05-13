import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import signUpTutorado, * as signUpTutoradoSelectors from './signUpTutorado';
import signUpTutor, * as signUpTutorSelectors from './signUpTutor';

const reducer = combineReducers({ 
    auth,
    signUpTutorado,
});

export default reducer;

export const getToken = state => authSelectors.getToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthError = state => authSelectors.getAuthError(state.auth);
export const isAuthenticated = state => getToken(state) != null;
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);

export const getIsSigningUpTutorado = state => signUpTutoradoSelectors.getIsSigningUp(state.signUpTutorado);
export const getSignUpErrorTutorado = state => signUpTutoradoSelectors.getSignUpError(state.signUpTutorado);

export const getIsSigningUpTutor = state => signUpTutorSelectors.getIsSigningUp(state.signUpTutor);
export const getSignUpErrorTutor = state => signUpTutorSelectors.getSignUpError(state.signUpTutor);
