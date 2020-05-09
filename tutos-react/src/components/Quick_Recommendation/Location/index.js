import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import './styles.css'; 

import Navbar from '../../Navbar';


const Location = ({state}) => {
    return (
        <div className="page">
        <Navbar/>
            <div className="subject_form">
                <h2>sdnakfjkajdfk</h2>
                <input type="text" className="subject_input" placeholder="Ingresa una materia..." autoFocus></input>
                <button type="button" className="subject_btn">Siguiente</button>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Location);
