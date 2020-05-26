import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

const FavTutor = ({tutor}) => {
    //TODO: Cambiar variables de lista...
    return(
        <tr>
            <td>{tutor.name}</td>
            <td>{tutor.lastname}</td>
            <td>{tutor.rate}</td>
            <td>{tutor.contacto}</td>
            <td>{tutor.chat}</td>
        </tr>
    )
}

export default connect(
    (state, {id})=>({
        tutor:selectors.getTutor(state, id)
    })
)(FavTutor)