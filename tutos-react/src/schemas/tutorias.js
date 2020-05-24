import { schema } from 'normalizr'

export const tutoria = new schema.Entity(
    'tutorias'
)

export const tutorias = new schema.Array(tutoria)