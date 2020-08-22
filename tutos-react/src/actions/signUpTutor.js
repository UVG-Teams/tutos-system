import * as types from '../types/signUpTutor';

export const startSignUpTutor = (first_name, last_name, username, email, password,  phone, birthdate, price) => ({
  type: types.SIGN_UP_TUTOR_STARTED,
  payload: {
    user:{
      username,
      password,
      first_name,
      last_name,
      email,
    },
    userDetail: {
      phone,
      birthdate,
      is_tutor: true,
    },
    tutor: {
      individual_price: price,

    },
  }
});

export const completeSignUpTutor = () => ({
  type: types.SIGN_UP_TUTOR_COMPLETED,
});

export const failSignUpTutor = error => ({
  type: types.SIGN_UP_TUTOR_FAILED,
  payload: {error},
});

export const stepOneSignUpTutor = (username, password, first_name, last_name, email) => ({
  type: types.SIGN_UP_TUTOR_STEP_ONE,
  payload:{
    username,
    password,
    first_name,
    last_name,
    email,
  },
});