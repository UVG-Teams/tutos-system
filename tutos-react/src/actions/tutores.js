import * as types from '../types/tutores';


export const startFetchingTutor = () => ({
  type: types.FETCH_TUTORS_STARTED,
});

export const completeFetchingTutor = (entities, order) => ({
  type: types.FETCH_TUTORS_COMPLETED,
  payload: {
    entities,
    order
  },
});

export const failFetchingTutor = error => ({
  type: types.FETCH_TUTORS_FAILED,
  payload: {
    error
  },
});

export const startAddingTutor = (userId, Tutor) => ({
  type: types.ADD_TUTOR_STARTED,
  payload: {
    userId,
    Tutor
  }
});

export const completeAddingTutor = (tempId, Tutor) => ({
  type: types.ADD_TUTOR_COMPLETED,
  payload: {
    tempId,
    Tutor
  },
});

export const failAddingTutor = (tempId, error) => ({
  type: types.ADD_TUTOR_FAILED,
  payload: {
    tempId,
    error
  },
});

export const startRemovingTutor = id => ({
    type: types.REMOVE_TUTOR_STARTED,
    payload: {
      id
    },
});

export const completeRemovingTutor = () => ({
  type: types.REMOVE_TUTOR_COMPLETED,
});

export const failRemovingTutor = (id, error) => ({
    type: types.REMOVE_TUTOR_FAILED,
    payload: {
      id,
      error
    },
});

