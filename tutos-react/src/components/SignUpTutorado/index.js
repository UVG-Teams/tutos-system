import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUpTutorado';

import './styles.css'; 
import '../../index.css';
import Navbar from '../Navbar';
import '../../normalize.css';

import momentanea from '../../static/momentanea.jpg';

const labelInput = (labelText, value, onChange) => {
	return (
		<div className="input-container-tutorado">
      <label className="Label-tutorado">
				{labelText}
      </label>
      <input className="input-tutorado"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}/>
    </div>
	)
};

const SignUpTutorado = ({ onSubmit, isLoading }) => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    const [name, changeName] = useState('');
    const [lastname, changeLastname] = useState('');
    const [mail, changeMail] = useState('');
    const [confirmPassword, changeConfirmPassword] = useState('');
    return (
        <Fragment>
            <Navbar/>
            <div className="all-container-tutorado">
                <div className="container-tutoradoL">
                    <div className="information-container-tutorado">
                        <div className="information-tutorado">
                            {"Información aquí"}
                            <img src={momentanea} className="img-info-tutorado" />
                        </div>
                    </div>
                    <div className="form-container-tutorado">
                        <div className="form-tutorado">
                            <p className="p-inputs-tutorado">
                                                        {labelInput("Nombre",name,changeName)}
                                                        {labelInput("Apellido",lastname,changeLastname)}
                            </p>
                            <p className="p-inputs-tutorado">
                                                        {labelInput("Usuario",username,changeUsername)}
                                                        {labelInput("Correo",mail,changeMail)}
                            </p>
                            <p className="p-inputs-tutorado">
                                                        {labelInput("Contraseña",password,changePassword)}
                                                        {labelInput("Confirmar contraseña",confirmPassword,changeConfirmPassword)}
                            </p>
                            <p>
                                <button className="register-tutorado-button" type="submit"
                                onClick = {() => onSubmit(username, password, name, lastname, mail)}>
                                {'Crear cuenta de tutorado'}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default connect(
    (state) => ({
        isLoading: selectors.getIsSigningUpTutorado(state),
    }),
    dispatch => ({
        onSubmit(username, password,name, lastname, mail) {
            dispatch(actions.startSignUpTutorado(username, password, name, lastname,mail ));
          },
    }),
)(SignUpTutorado);