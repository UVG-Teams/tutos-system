import * as types from './../types/mainPage'
import { combineReducers } from 'redux';

const recentTutos = (state = [] , action) => {
  switch (action.type){
    case types.START_GET_TUTOS:{
      return [];
    }
    case types.COMPLETE_GET_TUTOS:{
      return action.payload.load;
    }
    case types.FAIL_GET_TUTOS:{
      return action.payload.error;
    }
    default :{
      return state
    }
  }
}

const favStudents = (state = [ ] , action) => {
  switch (action.type){
    case  types.START_GET_STUDENTS:{
      return [];
    }
    case types.COMPLETE_GET_STUDENTS:{
      return action.payload.load;
    }
    case types.FAIL_GET_STUDENTS:{
      return action.payload.error;
    }
    default: { return state }
  } 
}

const mainPage = combineReducers({
  recentTutos,
  favStudents
})

export default mainPage;

export const getTutos = state => state.reccentTutos;
export const getFavStudents = state => state.favStudents;