import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';

import './styles.css';


const Login = ({ onSubmit,isLoading, }) => {
    const [username, changeUsername] = useState('');
    const [password, changePassword] = useState('');
    return (
        <Popup  trigger={<button  className="popup">Login</button>} position="bottom center">
            <p>
                <input className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => changeUsername(e.target.value)}
                />
            </p>
            <p>
                <input className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => changePassword(e.target.value)}
                />
            </p>
            <p>
                {
                isLoading ? (
                    <strong>{'Cargando...'}</strong>
                ) : (
                    <Link to = 'mainPageTutor'>
                        <button>
                            Continuar
                        </button>
                        {/* <button className="continuar" type="submit" onClick={
                        () => onSubmit(username, password)
                        }>
                        {'Continuar'}
                        </button> */}
                    </Link>
                )
                }
            </p>
        </Popup>
    );
};

export default connect(
    (state) => ({
        isLoading: selectors.getIsAuthenticating(state),
    }),
    dispatch => ({
        onSubmit(username, password) {
            dispatch(actions.startLogin(username, password));
          },
    }),
)(Login);