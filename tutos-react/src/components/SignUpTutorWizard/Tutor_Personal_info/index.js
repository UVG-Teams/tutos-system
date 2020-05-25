import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../../reducers';
import * as actions from '../../../actions/signUpTutor';


import './styles.css'; 
import '../../../index.css';

const labelInput = (labelText, value, onChange) => {
    return (
        <p className="p-input-tutorW">
            <div className="div-input-containerW">
                <label className="Label-tutorW">
                    {labelText}
                </label>
                <input className="input-tutorW" type="text" value={value} onChange={e => onChange(e.target.value)}  />
            </div>
        </p>
    )
};

const TutorPersonalInfo = ({onSubmit, isLoading}) => {
    const [name, changeName] = useState('');
    const [lastname, changeLastname] = useState('');
    const [username, changeUsername] = useState('');
    const [mail, changeMail] = useState('');
    const [password, changePassword] = useState('');
    const [confirmPassword, changeConfirmPassword] = useState('');

    return (
        <div className="container-tutorW">
            <div className="tutor-name">
                {labelInput("Nombre",name,changeName)}
                {labelInput("Apellido",lastname,changeLastname)}
            </div>
            <div className="tutor-userEmail">
                {labelInput("Usuario",username,changeUsername)}
                {labelInput("Email",mail,changeMail)}
            </div>
            <div className="tutor-password">
                {labelInput("Contraseña",password,changePassword)}
                {labelInput("Confirmar contraseña",confirmPassword,changeConfirmPassword)}
            </div>
        </div>
    )
};

export default connect(
    (state) => ({
        state: state,
    })
)(TutorPersonalInfo);