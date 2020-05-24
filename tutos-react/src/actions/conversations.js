import * as types from '../types/conversations';

export const startFetchingConversations = () => ({
    type: types.FETCH_CONVERSATIONS_STARTED,
});

export const completeFetchingConversations = (entities, order) => ({
    type: types.FETCH_CONVERSATIONS_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingConversations = error => ({
    type: types.FETCH_CONVERSATIONS_FAILED,
    payload: {
        error,
    },
});

export const startAddingConversation = conversation => ({
    type: types.ADD_CONVERSATION_STARTED,
    payload: conversation
});

export const completeAddingConversation = (tempId, conversation) => ({
    type: types.ADD_CONVERSATION_COMPLETED,
    payload: {
        tempId,
        conversation
    },
});

export const failAddingConversation = (tempId, error) => ({
    type: types.ADD_CONVERSATION_FAILED,
    payload: {
        tempId,
        error,
    },
});

export const startRemovingConversation = id => ({
    type: types.REMOVE_CONVERSATION_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingConversation = () => ({
    type: types.REMOVE_CONVERSATION_COMPLETED,
});

export const failRemovingConversation = (error) => ({
    type: types.REMOVE_CONVERSATION_FAILED,
    payload: {
        // id,
        error,
    },
});
