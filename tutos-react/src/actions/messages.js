import * as types from '../types/messages';

export const startFetchingMessages = () => ({
    type: types.FETCH_MESSAGES_STARTED,
});

export const completeFetchingMessages = (entities, order) => ({
    type: types.FETCH_MESSAGES_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingMessages = error => ({
    type: types.FETCH_MESSAGES_FAILED,
    payload: {
        error,
    },
});

export const startAddingMessage = message => ({
    type: types.ADD_MESSAGE_STARTED,
    payload: message
});

export const completeAddingMessage = (tempId, message) => ({
    type: types.ADD_MESSAGE_COMPLETED,
    payload: {
        tempId,
        message
    },
});

export const failAddingMessage = (tempId, error) => ({
    type: types.ADD_MESSAGE_FAILED,
    payload: {
        tempId,
        error,
    },
});

export const startRemovingMessage = id => ({
    type: types.REMOVE_MESSAGE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingMessage = () => ({
    type: types.REMOVE_MESSAGE_COMPLETED,
});

export const failRemovingMessage = (error) => ({
    type: types.REMOVE_MESSAGE_FAILED,
    payload: {
        // id,
        error,
    },
});
