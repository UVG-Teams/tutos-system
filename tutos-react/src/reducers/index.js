import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';

const reducer = combineReducers({ 
    auth
});

export default reducer;

export const getToken = state => authSelectors.getToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthError = state => authSelectors.getAuthError(state.auth);
export const isAuthenticated = state => getToken(state) != null;
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);