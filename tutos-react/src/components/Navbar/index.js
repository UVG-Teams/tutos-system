import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

import {
    DangerBtn,
} from '../Buttons';

import logo from '../../static/tutoswhite.png'; 
import profile from '../../static/social.png'; 
import bars from '../../static/bars.png';

import Login from '../Login';

import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';

const Navbar = ({
    isAuthenticated = false,
    authUsername = '',
}) => (
    <div className="navbar">
        <Link to='/'>
            <img src = {logo} className = "navbar-logo"></img>
        </Link>
        {
            isAuthenticated ? (
                <>
                    <Link to='/dashboardTutor'>
                        <a className="navbar-text"> Dashboard </a>
                    </Link>
                    <Link to='/inbox'>
                        <a className="navbar-text"> Inbox </a>
                    </Link>
                    <Link to='/search'>
                        <a className='navbar-text'> Buscador </a>
                    </Link>
                    {/* <h3 className='navbar-text'>{'BUSCADOR'}</h3> */}
                    <div className='div-display-row'>
                        <div className='div-display-column'>
                            <Link to='/profile'>
                                <img src = {profile} className = 'navbar-image'></img>
                                <h5 className='navbar-username'>{ authUsername }</h5>
                            </Link>
                        </div>
                        <img src = {bars} className = 'navbar-image'></img>
                        <DangerBtn text="Logout" action={ actions.logout() } />
                    </div>
                </>
            ) : (
                <>
                    <div className='div-display-row'>
                        <a href="" className="navbar-text">¿Cómo funciona?</a>
                        <a href="" className="navbar-text">Preguntas frecuentes</a>
                        <a href="" className="navbar-text">Acerca de nosotros</a>
                        <Link to='/quick-recommendation/subject'>
                            <a className="navbar-text"> Recomendación rápida </a>
                        </Link>
                    </div>
                    <Login/>
                </>
            ) 
        }
    </div>
);

export default connect(
    (state) => ({
        isAuthenticated: selectors.isAuthenticated(state),
        authUsername: selectors.getAuthUsername(state),
    })
)(Navbar);