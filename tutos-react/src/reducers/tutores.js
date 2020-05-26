import * as types from '../types/tutores'
import omit from 'lodash/omit'; 
import { combineReducers } from 'redux';

const byId = (state = {}, action) =>{
    switch(action.types){
        case types.FETCH_FAVORITE_TUTORS_COMPLETED: {
            const newState = {...state};
            const order = {entities, order} = action.payload;
            order.foreach(id => {
                newState[id] ={
                    ...entities[id],
                    isConfirmed: true,
                }
            })
            return newState;
        }
        case types.ADD_FAVORITE_TUTOR_STARTED: {
            const newState = {...state};
            newState[action.payload.id] ={
                ...action.payload,
                isConfirmed: false,
            }
            return newState;
        }
        case types.ADD_FAVORITE_TUTOR_COMPLETED: {
            const {tempId, favTutor} = action.payload;
            const newState = omit(state, tempId);
            newState[favTutor.id] = {
                ...favTutor,
                isConfirmed: true
            }
            return newState;
        }
        case types.REMOVE_FAVORITE_TUTOR_STARTED: {
            return omit(state, action.payload.id);
        }
        // case types.REMOVE_FAVORITE_TUTOR_COMPLETED: {
        //     return
        // }
        default:{
            return state;
        } 
    }
};
const order = (state = [], action) =>{
    switch(action.types){
        case types.FETCH_FAVORITE_TUTORS_COMPLETED: {
            return [
                ...state, 
                ...action.payload.order
            ];
        }
        case types.ADD_FAVORITE_TUTOR_STARTED: {
            return [
                ...state, 
                ...action.payload.favTutor.id
            ];
        }
        case types.ADD_FAVORITE_TUTOR_COMPLETED: {
            const {tempId, favTutor} = action.payload;
            return state.map(id => {id === tempId ? favTutor.id : id});
        }
        case types.REMOVE_FAVORITE_TUTOR_STARTED: {
            return state.filter(id => id !== action.payload.id);
        }
        // case types.REMOVE_FAVORITE_TUTOR_COMPLETED: {
        //     return
        // }
        default:{
            return state;
        } 
    }
};
const isFetching = (state = false, action) =>{
    switch(action.types){
        case types.FETCH_FAVORITE_TUTORS_STARTED: {
            return true;
        }
        case types.FETCH_FAVORITE_TUTORS_COMPLETED: {
            return false;
        }
        case types.FETCH_FAVORITE_TUTORS_FAILED: {
            return false;
        }
        default:{
            return state;
        }
    }
};
const error = (state = null, action) =>{
    switch(action.types){
        case types.FETCH_FAVORITE_TUTORS_STARTED:
        case types.FETCH_FAVORITE_TUTORS_COMPLETED:
        case types.ADD_FAVORITE_TUTOR_STARTED:
        case types.ADD_FAVORITE_TUTOR_COMPLETED:
        case types.REMOVE_FAVORITE_TUTOR_STARTED:
        case types.REMOVE_FAVORITE_TUTOR_COMPLETED:
            return null;
        case types.REMOVE_FAVORITE_TUTOR_FAILED:
        case types.FETCH_FAVORITE_TUTORS_FAILED:
        case types.ADD_FAVORITE_TUTOR_FAILED:
            return action.payload.error
        default:{
            return state;
        }
    }
};

export default combineReducers({
    byId,
    order,
    isFetching,
    error,
})

export const getFavTutor = state => state.byId[id];
export const getFavTutores = state => state.order.map(id => getFavTutor(sate, id));
export const isFetchigFavTutores = state => state.isFetching;
export const getFavTutorError = state => state.error;