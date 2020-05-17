import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUpTutorado';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

import slide0 from '../../static/slide0.jpg';

const labelInput = (labelText, value, onChange) => {
	return (
		<div className="input-container-tutorado">
      <label className="Label-tutorado">
				{labelText}
      </label>
      <input className="input-tutorado"
        type="text"
        placeholder={labelText}
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
            <div className="front-screen-tutorado">
                {"Crear cuenta de tutorado"}
                <Link className="inicio-tutorado" to='/'>
                    <a className="linksU">Regresar a inicio</a>
                </Link>
            </div>
            <div className="container-tutorado">
                <div className="information-container-tutorado">
                    <div className="information-tutorado">
                        {"Información aquí"}
                        <img src={slide0} className="img-info-tutorado" />
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
													{labelInput("Constraseña",password,changePassword)}
													{labelInput("Confirmar contraseña",confirmPassword,changeConfirmPassword)}
                        </p>
                        <p>
                            <button className="register-tutorado-button" type="submit"
                            onClick = {() => onSubmit(name, lastname,username,mail,password,confirmPassword)}>
                            {'Crear cuenta de tutorado'}
                            </button>
                        </p>
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
        onSubmit(name, lastname,username, mail, password, confirmPassword) {
            dispatch(actions.startSignUpTutorado(name, lastname,username, mail, password,confirmPassword));
          },
    }),
)(SignUpTutorado);