import * as types from '../types/signUpTutorado';

export const startSignUpTutorado = (username, password, first_name, last_name, email) => ({
  type: types.SIGN_UP_TUTORADO_STARTED,
  payload: {
    username,
    password,
    first_name,
    last_name,
    email,
  },
});

export const completeSignUpTutorado = () => ({
  type: types.SIGN_UP_TUTORADO_COMPLETED,
});

export const failSignUpTutorado = error => ({
  type: types.SIGN_UP_TUTORADO_FAILED,
  payload: {error},
});