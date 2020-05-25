import * as types from '../types/tutorias.js'

export const startChangeTutoriaStatus = (tutoriaid) => ({
    type : types.CHANGE_TUTORIA_STATUS_STARTED ,
    payload: {
        tutoriaid 
    }
})
export const completeChangeTutoriaStatus = (entities, order) => ({
    type : types.CHANGE_TUTORIA_STATUS_COMPLETED ,
    payload: {
        entities,
        order
    }
})
export const failChangeTutoriaStatus = error => ({
    type : types.CHANGE_TUTORIA_STATUS_FAILED ,
    payload: {
        error
    }
})

export const startGetTutos  = (/*tutorid = 1*/) => ({
  type : types.GET_TUTOS_STARTED,
//   payload : {
//     tutorid: tutorid,
//   },
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
