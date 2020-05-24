import * as types from '../types/tutorias'
import { combineReducers } from 'redux';
import omit from 'lodash/omit'

const byid = (state = {}, action) => {
    switch(action.type){
        case types.GET_TUTOS_COMPLETED :{
            const newState = {...state};
            const { entities, order } = action.payload;
            order.forEach(id => {
                newState[id] = {
                    ...entities[id],
                    isConfirmed: true
                }
            })
            return newState
        }
        case types.ADD_TUTO_STARTED :{
            const newState = {...state}
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed : false
            }
            return newState
        }
        case types.ADD_TUTO_COMPLETED:{
            const {tempid, tutoria } = action.payload
            const newState = omit(state, tempid)
            newState[tutoria.id] = {
                ...tutoria,
                isConfirmed : true,
            }
            return newState
        }
        case types.DELETE_TUTOS_STARTED:{
            return omit(state,action.payload.id)
        }
        default :{
            return state
        }
    }
}

const order = (state = [] , action) => {
  switch (action.type){
    case types.GET_TUTOS_COMPLETED: {
        // console.log('ENTRAMOOOOS')
        return [
            ...state, 
            ...action.payload.order
        ]
    }
    case types.ADD_TUTO_STARTED: {
        return [
            ...state, 
            ...action.payload.tutoria.id
        ]
    }
    case types.ADD_TUTO_COMPLETED: {
        const { tempid, tutoria } = action.payload
        return state.map(id => id === tempid ? tutoria.id : id)
    }
    case types.DELETE_TUTOS_STARTED: {
        const { id } = action.payload
        return state.filter(value => value !== id)
    }
    // case types.DELETE_TUTOS_COMPLETED: {

    // }
    default :{
      return state
    }
  }
}


const isFetching = (state = false, action) => {
    switch(action.type){
        case types.GET_TUTOS_STARTED: {
            return true
        }
        case types.GET_TUTOS_COMPLETED:{
            return false
        }   
        case types.GET_TUTOS_FAILED:{
            return false
        }
        default : {return state}
    }
}

const error = (state = null, action) => {
    switch(action.type){
        case types.GET_TUTOS_STARTED : {
            return null
        }
        case types.GET_TUTOS_COMPLETED : {
            return null
        }
        case types.GET_TUTOS_FAILED : {
            return action.payload.error
        }
        case types.ADD_TUTO_STARTED: {
            return null
        }
        case types.ADD_TUTO_COMPLETED: {
            return null
        }
        case types.ADD_TUTO_FAILED : {
            return action.payload.error
        }

        case types.DELETE_TUTOS_STARTED: {
            return null
        }
        case types.DELETE_TUTOS_COMPLETED: {
            return null
        }
        case types.DELETE_TUTOS_FAILED : {
            return action.payload.error
        }
        default: {
            return state
        }
    }
}

const dashboardTutor = combineReducers({
  byid,
  order,
  isFetching,
  error,
})

export default dashboardTutor;

export const getTutoria = (state, id) =>  state.byid[id]
export const getTutorias = state => state.order.map(id => getTutoria(state, id))
export const isFetchingTutorias = (state) => state.isFetching;
export const getTutoriaError = (state) => state.error
