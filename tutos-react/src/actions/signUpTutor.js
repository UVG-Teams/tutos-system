import * as types from '../types/signUpTutor';

export const startSignUpTutor = (name, lastname, username, mail, 
  password, confirmPassword, language, location, phone, date, institution, price, career) => ({
  type: types.SIGN_UP_TUTOR_STARTED,
  payload: {name, lastname, username, mail, password, confirmPassword, language, 
    location, phone, date,institution,price,career},
});

export const completeSignUpTutor = () => ({
  type: types.SIGN_UP_TUTOR_COMPLETED,
});

export const failSignUpTutor = error => ({
  type: types.SIGN_UP_TUTOR_FAILED,
  payload: {error},
});