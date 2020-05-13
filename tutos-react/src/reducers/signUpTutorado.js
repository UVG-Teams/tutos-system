import {combineReducers} from 'redux';

import * as types from '../types/signUpTutorado';

const isSigningUp = (state=false, action) => {
  switch (action.type) {
    case types.SIGN_UP_TUTORADO_STARTED: {
        return true;
    }
    case types.SIGN_UP_TUTORADO_COMPLETED: {
        return false;
    }
    case types.SIGN_UP_TUTORADO_FAILED: {
      return false;
    }
  }
  return state;
};

const error = (state=null, action) => {
  switch (action.type){
    case types.SIGN_UP_TUTORADO_STARTED: {
      return null;
    }
    case types.SIGN_UP_TUTORADO_COMPLETED: {
      return null;
    }
    case types.SIGN_UP_TUTORADO_FAILED: {
      return action.payload.error;
    }
  }
  return state;
};

const signUpTutorado = combineReducers({
  isSigningUp,
  error,
})

export default signUpTutorado;


export const getIsSigningUp = state => state.isSigningUp;
export const getSignUpError = state => state.error;