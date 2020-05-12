import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css'; 

import Navbar from '../../Navbar';


const Location = ({state}) => {
    return (
        <div className="page">
        <Navbar/>
            <div className="location_form">
                <h2>Por favor ingresa la ubicación en donde quieres recibir la tutoría.</h2>
                <input type="text" className="location_input" placeholder="Ingresa una ubicación..." autoFocus></input>
                <div className="links">
                <Link to='/quick_recommendation/subject'>
                    <a className="back">Atrás</a>
                </Link>
                <Link to='/quick_recommendation/education_level'>
                    <button type="button" className="next">Siguiente</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Location);
