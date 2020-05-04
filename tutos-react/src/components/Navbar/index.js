import React from 'react';
import { connect } from 'react-redux';
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
                <a href="" className="links">Otra Funcion</a>
                <div className="user">
                    {
                        // TODO: Colocar condicion logeado
                        false ? (
                            <></>
                        ) : (
                            <>
                                <a href="" className="linksU">Ingresar</a>
                                <a href="" className="linksU register">Registrarse</a>
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