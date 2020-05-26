import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/signUpTutor';
import * as types from '../types/signUpTutor';

import * as http from '../utils/http';

import {
  API_BASE_URL,
} from '../settings';


function* signUpTutor(action){
  try{
      const {user, userDetail, tutor} = action.payload;
      const userResponse = yield call(
          fetch,
          `${API_BASE_URL}/users/`,
          {
              method: 'POST',
              body: JSON.stringify(user),
              headers:{
              'Content-Type': 'application/json',
              },
          },
      );
      const result = yield userResponse.json();
      const userId= result.id;
      const detail = {
        ...userDetail,
        user:userId,
      }
      const tutorInfo = {
        ...tutor,
        user:userId,
      }
      const response = yield call(
          fetch,
          `${API_BASE_URL}/userdetails/`,
          {
              method: 'POST',
              body: JSON.stringify(detail),
              headers:{
                  'Content-Type': 'application/json',
              },
          },
      );
      const tutorResponse = yield call(
        fetch,
        `${API_BASE_URL}/tutores/`,
          {
              method: 'POST',
              body: JSON.stringify(tutorInfo),
              headers:{
                  'Content-Type': 'application/json',
              },
          },
      );

      if(http.isSuccessful(userResponse.status) && http.isSuccessful(response.status) && http.isSuccessful(tutorResponse.status)){
          const jsonResult = yield userResponse.json();
          yield put(actions.completeSignUpTutor());

      } else if(http.isSuccessful(userResponse.status) && !http.isSuccessful(response.status) && http.isSuccessful(tutorResponse.status)){
          const {non_field_errors} = yield response.json();
          yield put(actions.failSignUpTutor(non_field_errors[0]));
      } else if(http.isSuccessful(userResponse.status) && http.isSuccessful(response.status) && !http.isSuccessful(tutorResponse.status)){
          const {non_field_errors} = yield tutorResponse.json();
          yield put(actions.failSignUpTutor(non_field_errors[0]));
      } else {
        const {non_field_errors} = yield response.json();
          yield put(actions.failSignUpTutor(non_field_errors[0]));
      }

  } catch (error) {
      yield put(actions.failSignUpTutor('Connection failed!'));
  }
};


export function* watchSignUpTutorStarted() {
  yield takeEvery(
      types.SIGN_UP_TUTOR_STARTED,
      signUpTutor,
  );
}

