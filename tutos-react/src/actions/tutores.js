import * as types from '../types/tutores';


export const startFetchingFavTutor = () => ({
  type: types.FETCH_FAVORITE_TUTORS_STARTED,
});

export const completeFetchingFavTutor = (entities, order) => ({
  type: types.FETCH_FAVORITE_TUTORS_COMPLETED,
  payload: {
    entities,
    order
  },
});

export const failFetchingFavTutor = error => ({
  type: types.FETCH_FAVORITE_TUTORS_FAILED,
  payload: {
    error
  },
});

export const startAddingFavTutor = (userId, favTutor) => ({
  type: types.ADD_FAVORITE_TUTOR_STARTED,
  payload: {
    userId,
    favTutor
  }
});

export const completeAddingFavTutor = (tempId, favTutor) => ({
  type: types.ADD_FAVORITE_TUTOR_COMPLETED,
  payload: {
    tempId,
    favTutor
  },
});

export const failAddingFavTutor = (tempId, error) => ({
  type: types.ADD_FAVORITE_TUTOR_FAILED,
  payload: {
    tempId,
    error
  },
});

export const startRemovingFavTutor = id => ({
    type: types.REMOVE_FAVORITE_TUTOR_STARTED,
    payload: {
      id
    },
});

export const completeRemovingFavTutor = () => ({
  type: types.REMOVE_FAVORITE_TUTOR_COMPLETED,
});

export const failRemovingFavTutor = (id, error) => ({
    type: types.REMOVE_FAVORITE_TUTOR_FAILED,
    payload: {
      id,
      error
    },
});

