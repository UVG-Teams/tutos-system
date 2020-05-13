import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUpTutorado';
import '../SignUpTutorado/styles.css'; 
import slide0 from '../../static/slide0.jpg';

const SignUpTutorado = ({ onSubmit, isLoading }) => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    const [name, changeName] = useState('');
    const [lastname, changeLastname] = useState('');
    const [mail, changeMail] = useState('');
    const [confirmPassword, changeConfirmPassword] = useState('');
    return (
        <Fragment>
            <div className="front-screen">
                {"Crear cuenta de tutorado"}
                <Link className="inicio" to='/'>
                    <a className="linksU">Regresar a inicio</a>
                </Link>
            </div>
            <div className="container">
                <div className="information-container">
                    <div className="information">
                        {"Información aquí"}
                        <img src={slide0} className="img-info" />
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <p className="p-inputs">
                            <div className="input-container">
                            <label className="Label">{"Nombre"}
                            </label>
                            <input className="input"
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={e => changeName(e.target.value)}
                            />
                            </div>
                        
                            <div className="input-container">
                            <label className="Label">
                                {"Apellido"}
                            </label>
                            <input className="input"
                            type="text"
                            placeholder="Lastname"
                            value={lastname}
                            onChange={e => changeLastname(e.target.value)}
                            />
                            </div>
                        </p>
                        <p className="p-inputs">
                            <div className="input-container">
                            <label className="Label">
                                {"Usuario"}
                            </label>
                            <input className="input"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => changeUsername(e.target.value)}
                            />
                            </div>

                            <div className="input-container">
                            <label className="Label">
                                {"Correo"}
                            </label>
                            <input className="input"
                            type="text"
                            placeholder="Email"
                            value={mail}
                            onChange={e => changeMail(e.target.value)}
                            />
                            </div>
                        </p>
                        <p className="p-inputs">
                            <div className="input-container">
                            <label className="Label">
                                {"Contraseña"}
                            </label>
                            <input className="input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => changePassword(e.target.value)}
                            />
                            </div>

                            <div className="input-container">
                            <label className="Label">
                                {"Confirmar contraseña"}
                            </label>
                            <input className="input"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={e => changeConfirmPassword(e.target.value)}
                            />
                            </div>
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