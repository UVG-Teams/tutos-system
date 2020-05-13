import * as types from '../types/signUpTutorado';

export const startSignUpTutorado = (name, lastname, username, mail, password, confirmPassword) => ({
  type: types.SIGN_UP_TUTORADO_STARTED,
  payload: {name, lastname, username, mail, password, confirmPassword},
});

export const completeSignUpTutorado = () => ({
  type: types.SIGN_UP_TUTORADO_COMPLETED,
});

export const failSignUpTutorado = error => ({
  type: types.SIGN_UP_TUTORADO_FAILED,
  payload: {error},
});