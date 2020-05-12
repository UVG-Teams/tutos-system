import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';

import * as types from '../types/auth';

const token = (state=null, action) => {
    switch(action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return action.payload.token;
        }
        case types.AUTHENTICATION_FAILED: {
            return null;
        }
        case types.LOGGED_OUT: {
            return null;
        }
    }
    return state;
};

const isAuthenticating = (state = false, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return true;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return false;
        }
        case types.AUTHENTICATION_FAILED: {
            return false;
        }
    }
    return state;
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return null;
        }
        case types.AUTHENTICATION_FAILED: {
            return action.payload.error;
        }
    }
    return state;
};

const decoded = (state = null, action) => {
    switch (action.type) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }
        case types.AUTHENTICATION_COMPLETED: {
            return jwtDecode(action.payload.token);
        }
        case types.AUTHENTICATION_FAILED: {
            return null;
        }
        case types.LOGGED_OUT: {
            return null;
        }
    }
    return state;
};

const auth = combineReducers({
    token,
    isAuthenticating,
    error,
    decoded,
});

export default auth;

export const getToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getAuthError = state => state.error;
export const getAuthUsername = state => state.decoded ? state.decoded.username : null;
export const getAuthExpiration = state => state.decoded ? state.decoded.exp : null;
