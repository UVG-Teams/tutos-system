import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import './styles.css'; 
import logo from '../../static/tutoswhite.png'; 

const Navbar = ({state}) => {
    return (
        <div className="navbar">
            <div className="logo_container">
                <img src = {logo} className = "logo"></img>
            </div>
            <div className="links_container">
                <a href="" className="links">¿Cómo funciona?</a>
                <a href="" className="links">Preguntas frecuentes</a>
                <a href="" className="links">Acerca de nosotros</a>
                <Link to='/quick_recommendation/subject'>
                    <a className="links">Otra Funcion</a>
                </Link>
                <div className="user">
                    {
                        // TODO: Colocar condicion logeado
                        false ? (
                            <></>
                        ) : (
                            <>
                                <Link to='/login'>
                                    <a className="linksU">Ingresar</a>
                                </Link>

                                <Link to='/signup'>
                                    <a className="linksU">Registrarse</a>
                                </Link>
                            </>
                        ) 
                    }
                </div>
                
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Navbar);