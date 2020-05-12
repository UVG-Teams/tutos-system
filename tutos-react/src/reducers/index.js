import { combineReducers } from 'redux';
import mainPage, * as mainPageSelectors from './mainPage'

import auth, * as authSelectors from './auth';

const reducer = combineReducers({ 
  mainPage,
  auth
});

export default reducer;


export const getMainPageTutos = state => mainPageSelectors.getTutos(state.mainPage)
export const getMainPageFavStudents = state => mainPageSelectors.getFavStudents(state.mainPage)

export const getToken = state => authSelectors.getToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthError = state => authSelectors.getAuthError(state.auth);
export const isAuthenticated = state => getToken(state) != null;
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
