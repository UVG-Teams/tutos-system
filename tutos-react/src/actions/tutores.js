import * as types from '../types/tutores';


export const startAddFavTutor = (tutor) => ({
  type: types.ADD_FAVORITE_TUTOR_STARTED,
});

export const completeAddFavTutor = (tutor) => ({
  type: types.ADD_FAVORITE_TUTOR_COMPLETED,
});

export const failAddFavTutor = error => ({
  type: types.ADD_FAVORITE_TUTOR_FAILED,
  payload: {error},
});

export const startDeleteFavTutor = (id) => ({
    type: types.DELETE_FAVORITE_TUTOR_STARTED,
    payload: {id},
});

export const completeDeleteFavTutor = () => ({
  type: types.DELETE_FAVORITE_TUTOR_COMPLETED,
});

export const failDeleteFavTutor = error => ({
    type: types.DELETE_FAVORITE_TUTOR_FAILED,
    payload: {error},
});

export const startGetFavTutor = (id) => ({
    type: types.GET_FAVORITE_TUTORS_STARTED,
    payload: {id},
  });
  
  export const completeGetFavTutor = tutor => ({
    type: types.GET_FAVORITE_TUTORS_COMPLETED,
  });
  
  export const failGetFavTutor = error => ({
    type: types.GET_FAVORITE_TUTORS_FAILED,
    payload: {error},
  });