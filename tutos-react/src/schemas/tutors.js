import{schema} from 'normalizr';

export const tutor = new schema.Entity(
    'tutors',
)

export const tutors = new schema.Array(tutor);