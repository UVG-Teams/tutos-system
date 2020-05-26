import {combineReducers} from 'redux';

import * as types from '../types/signUpTutor';

const isSigningUp = (state=false, action) => {
  switch (action.type) {
    case types.SIGN_UP_TUTOR_STARTED: {
        return true;
    }
    case types.SIGN_UP_TUTOR_COMPLETED: {
        return false;
    }
    case types.SIGN_UP_TUTOR_FAILED: {
      return false;
    }
  }
  return state;
};

const error = (state=null, action) => {
  switch (action.type){
    case types.SIGN_UP_TUTOR_STARTED: {
      return null;
    }
    case types.SIGN_UP_TUTOR_COMPLETED: {
      return null;
    }
    case types.SIGN_UP_TUTOR_FAILED: {
      return action.payload.error;
    }
    default:
      return state;
  }
  
};

const signUpUserInfo =(state={}, action) => {
  switch (action.type){
    case types.SIGN_UP_TUTOR_STEP_ONE:{
      return action.payload;
    }
    case types.SIGN_UP_TUTOR_COMPLETED:{
      return {};
    }
    default:
      return state;
  }
};

const signUpTutor = combineReducers({
  isSigningUp,
  error,
  signUpUserInfo,
})

export default signUpTutor;


export const getIsSigningUp = state => state.isSigningUp;
export const getSignUpError = state => state.error;
export const getSignUpUserInfo = state => state.signUpUserInfo;