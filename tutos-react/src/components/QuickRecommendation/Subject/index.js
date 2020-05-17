import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../../index.css';
import '../../../normalize.css';

import Navbar from '../../Navbar';
// import Footer from '../Footer';

const QuickRecommendationSubject = ({state}) => {
    return (
        <div className="page">
        <Navbar/>
            <div className="text">
                <p>Tuto's cuenta con alrededor de # tutores.</p>
                <p className="bold">Encontremos la mejor opcion para ti.</p>
            </div>
            <div className="subject_form">
                <h2>¿Qué quieres aprender?</h2>
                <input type="text" className="subject_input" placeholder="Ingresa una materia..." autoFocus></input>
                <Link to='/quick-recommendation/location'>
                    <button type="button" className="subject_btn">Siguiente</button>
                </Link>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(QuickRecommendationSubject);
