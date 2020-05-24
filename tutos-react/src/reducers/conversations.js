import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/conversations';


const byId = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_CONVERSATIONS_COMPLETED: {
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
        case types.ADD_CONVERSATION_STARTED: {
            const newState = { ...state };
            newState[action.payload.id] = {
                ...action.payload,
                isConfirmed: false,
            }
            return newState;
        }
        case types.ADD_CONVERSATION_COMPLETED: {
            const { tempId, conversation } = action.payload;
            const newState = omit(state, tempId);
            newState[conversation.id] = {
                ...conversation,
                isConfirmed: true,
            }
            return newState;
        }
        case types.REMOVE_CONVERSATION_STARTED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
        // case types.REMOVE_CONVERSATION_COMPLETED: {
        //     return 
        // }
    }
};

const order = (state = [], action) => {
    switch(action.type) {
        case types.FETCH_CONVERSATIONS_COMPLETED: {
            return [
                ...state,
                ...action.payload.order
            ];
        }
        case types.ADD_CONVERSATION_STARTED: {
            return [
                ...state,
                ...action.payload.id
            ];
        }
        case types.ADD_CONVERSATION_COMPLETED: {
            const { tempId, conversation } = action.payload;
            return state.map(id => id === tempId ? conversation.id : id);
        }
        case types.REMOVE_CONVERSATION_STARTED: {
            return state.filter(id => id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.FETCH_CONVERSATIONS_STARTED: {
            return true;
        }
        case types.FETCH_CONVERSATIONS_COMPLETED: {
            return false;
        }
        case types.FETCH_CONVERSATIONS_FAILED: {
            return false;
        }
        default: {
            return state;
        }
    }
};

const error = (state = null, action) => {
    switch(action.type) {
        case types.FETCH_CONVERSATIONS_STARTED:
        case types.FETCH_CONVERSATIONS_COMPLETED:
        case types.ADD_CONVERSATION_STARTED:
        case types.ADD_CONVERSATION_COMPLETED:
        case types.REMOVE_CONVERSATION_STARTED:
        case types.REMOVE_CONVERSATION_COMPLETED:
            return null;
        case types.FETCH_CONVERSATIONS_FAILED: 
        case types.ADD_CONVERSATION_FAILED:
        case types.REMOVE_CONVERSATION_FAILED:
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

export const getConversation = (state, id) => state.byId[id];
export const getConversations = state => state.order.map(id => getConversation(state, id));
export const isFetchingConversations = state => state.isFetching;
export const getConversationError = state => state.error;
