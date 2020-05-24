import { schema } from 'normalizr';

export const conversation = new schema.Entity(
    'conversations',
);

export const conversations = new schema.Array(conversation);
