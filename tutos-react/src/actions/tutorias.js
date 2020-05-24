import * as types from '../types/tutorias.js'

export const startGetTutos  = (tutorid) => ({
  type : types.GET_TUTOS_STARTED,
  payload : {
    tutorid: tutorid,
  },
})

export const completeGetTutos = (entities, order) => ({
  type : types.GET_TUTOS_COMPLETED,
  payload : {
      entities,
      order
  } 
})

export const failGetTutos = error => ({
  type : types.GET_TUTOS_FAILED,
  payload : {error}
})

export const startAddTutoria = (tutoria) => ({
    type : types.ADD_TUTO_STARTED,
    payload: tutoria
})
export const completeAddTutoria = (tempid ,  tutoria) => ({
    type : types.ADD_TUTO_COMPLETED,
    payload: {
        tempid,
        tutoria
    }
})
export const failAddTutoria = (tempid , error) => ({
    type : types.ADD_TUTO_FAILED,
    payload: {
        tempid, 
        error
    }
})

export const startDeleteTutoria = (id ) => ({
    type : types.DELETE_TUTOS_STARTED ,
    payload: {
        id
    }
})
export const completeDeleteTutoria = () => ({
    type : types.DELETE_TUTOS_COMPLETED ,
})
export const failDeleteTutoria = (id, error) => ({
    type : types.DELETE_TUTOS_FAILED ,
    payload: {
        id,
        error
    }
})
