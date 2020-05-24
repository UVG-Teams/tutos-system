import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../index.css';
// import '../../normalize.css';

import logo from '../../static/tutoswhite.png'; 
import profile from '../../static/social.png'; 
import bars from '../../static/bars.png';

import Login from '../Login';

const Navbar = ({ state }) => (
    <div className="Navbar">
        <div className="Navbar-logo_container">
            <Link to='/'>
                <img src = {logo} className = "Navbar-logo"></img>
            </Link>
        </div>
        <div className="Navbar-links_container">
            {
                // TODO: Colocar condicion loggeado
                false ? (
                    <>
                        <img src = {profile} className = 'Navbar-image'></img>
                        <h3>{'TU NOMBRE AQUI'}</h3>
                        <img src = {bars} className = 'Navbar-image'></img>
                    </>
                ) : (
                    <>
                        <a href="" className="Navbar-links">¿Cómo funciona?</a>
                        <a href="" className="Navbar-links">Preguntas frecuentes</a>
                        <a href="" className="Navbar-links">Acerca de nosotros</a>
                        <Link to='/quick-recommendation/subject'>
                            <a className="Navbar-links">Otra Funcion</a>
                        </Link>
                        <Login/>
                        <label className='Navbar-user'>Registro:</label>
                        <Link to='/signup'>
                            <a className="Navbar-linksU">Tutor</a>
                        </Link>
                        <Link to='/signupTutorado'>
                            <a className="Navbar-linksU">Tutorado</a>
                        </Link>
                    </>
                ) 
            }
        </div>
    </div>
);

export default connect(
    (state) => ({
        state: state,
    })
)(Navbar);