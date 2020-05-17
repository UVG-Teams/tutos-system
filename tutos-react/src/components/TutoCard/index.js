import React , { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

const card = ({clase, date, time, students, location, totalCost} )=> {
    return (
        <Fragment>
            <div className = 'card'>
                <h2 className='clase'>{clase}</h2>
                <h3 className = 'body_text'>{date}</h3>
                <h3 className = 'body_text'>{time}</h3>
                <h3 className = 'body_text'>{students}</h3>
                <h3 className = 'body_text'>{location}</h3>
                <h3 className = 'body_text'>{'Q.'+totalCost}</h3>
            </div>
        </Fragment>
    )
}
export default card;
// export default connect (
//     state => ({
//         clase: 'Algebra',
//         date : 'Miercoles, 8 de agosto',
//         time : '14:00-16:00',
//         students : 'Pepito',
//         location : 'UVG',
//         totalCost : 500
//     }),
//     dispatch => ({})
// )(card)