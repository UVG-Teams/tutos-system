import { combineReducers } from 'redux';
import mainPage, * as mainPageSelectors from './mainPage'

const reducer = combineReducers({ 
  mainPage
});

export default reducer;

export const getMainPageTutos = state => mainPageSelectors.getTutos(state.mainPage)
export const getMainPageFavStudents = state => mainPageSelectors.getFavStudents(state.mainPage)