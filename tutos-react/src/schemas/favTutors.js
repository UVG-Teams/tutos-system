import{schema} from 'normalizr';

export const favTutor = new schema.Entity(
    'favTutors',
)

export const favTutors = new schema.Array(favTutor);