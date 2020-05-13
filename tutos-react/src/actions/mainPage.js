import * as types from '../types/mainPage.js'

export const startGetTutos  = (tutorid) => ({
  type : types.START_GET_TUTOS,
  payload : {
    tutorid: tutorid,
  },
})

export const completeGetTutos = (load) => ({
  type : types.COMPLETE_GET_TUTOS,
  payload : {...load} //load es una lista de tutorias
})

export const failGetTutos = error => ({
  type : types.FAIL_GET_TUTOS,
  payload : {...error}
})

export const StartGetStudents = ( tutorid ) => ({
  type : types.START_GET_STUDENTS,
  payload: {
    tutorid,
  },
})

export const CompleteGetStudents = (load) => ({
  type : types.FAIL_GET_STUDENTS,
  payload: {...load},
})

export const FailGetStudents = (error) => ({
  type : types.FAIL_GET_STUDENTS,
  payload: {...error},
})