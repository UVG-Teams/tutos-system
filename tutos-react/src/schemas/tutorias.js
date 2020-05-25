import { schema } from 'normalizr'
/*
tutorias:
    id
    *tutor
    *tutorado
    *location
    status
    *topic
    *course
    datetime
    hours
    total_price
    isConfirmed
*/

const user = new schema.Entity('users')
// const tutorado = new

const location = new schema.Entity('location')

const course = new schema.Entity('course')

const topic = new schema.Entity('topic')

export const tutoria = new schema.Entity(
    'tutorias',
    {
        tutor :  user,
        tutorado: user,
        location : location,
        topic : topic,
        course: course
    }
)

export const tutorias = new schema.Array(tutoria)