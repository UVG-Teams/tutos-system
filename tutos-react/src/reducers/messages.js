import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/messages';


const byId = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGES_COMPLETED: {
            const newState = { ...state };
            const { entities, order } = action.payload;
            order.forEach(id => {
                newState[id] = {
                    ...entities[id],
                    isConfirmed: true,
                }
            });
            return newState;
        }
        case types.ADD_MESSAGE_STARTED: {
            const newState = { ...state };
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed: false,
            }
            return newState;
        }
        case types.ADD_MESSAGE_COMPLETED: {
            const { tempId, message } = action.payload;
            const newState = omit(state, tempId);
            newState[message.id] = {
                ...message,
                isConfirmed: true,
            }
            return newState;
        }
        case types.REMOVE_MESSAGE_STARTED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
        // case types.REMOVE_MESSAGE_COMPLETED: {
        //     return 
        // }
    }
};

const order = (state = [], action) => {
    switch(action.type) {
        case types.FETCH_MESSAGES_COMPLETED: {
            return [
                ...state,
                ...action.payload.order
            ];
        }
        case types.ADD_MESSAGE_STARTED: {
            return [
                ...state,
                ...action.payload.id
            ];
        }
        case types.ADD_MESSAGE_COMPLETED: {
            const { tempId, message } = action.payload;
            return state.map(id => id === tempId ? message.id : id);
        }
        case types.REMOVE_MESSAGE_STARTED: {
            return state.filter(id => id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGES_STARTED: {
            return true;
        }
        case types.FETCH_MESSAGES_COMPLETED: {
            return false;
        }
        case types.FETCH_MESSAGES_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGES_STARTED:
        case types.FETCH_MESSAGES_COMPLETED:
        case types.ADD_MESSAGE_STARTED:
        case types.ADD_MESSAGE_COMPLETED:
        case types.REMOVE_MESSAGE_STARTED:
        case types.REMOVE_MESSAGE_COMPLETED:
            return null;
        case types.FETCH_MESSAGES_FAILED: 
        case types.ADD_MESSAGE_FAILED:
        case types.REMOVE_MESSAGE_FAILED:
            return action.payload.error;
        default: {
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

export const getMessage = (state, id) => state.byId[id];
export const getMessages = state => state.order.map(id => getMessage(state, id));
export const isFetchingMessages = state => state.isFetching;
export const getMessageError = state => state.error;
