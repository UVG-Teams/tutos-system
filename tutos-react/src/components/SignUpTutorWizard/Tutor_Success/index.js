import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../../reducers';
import * as actions from '../../../actions/signUpTutor';


import './styles.css'; 
import '../../../index.css';
import '../../../normalize.css';




const TutorSuccessMessage = ({state, info,onSubmit, isLoading}) => {
    return (
        <div className="tutor-successMessage-generalContainer">
            <div className="tutor-successMessage-container">
                <h1>Tu cuenta se ha registrado con éxito</h1>
                <label>Para hacer login dirígete a la </label><Link to='/'><label>página principal</label></Link>
            </div>
        </div>
    )
}

export default TutorSuccessMessage;

