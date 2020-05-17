import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../../index.css';
import '../../../normalize.css';

import Navbar from '../../Navbar';
import Schedule from '../../Schedule';


const QuickRecommendationSchedule = ({state}) => {
    return (
        <div className="page">
            <Navbar/>
            <div className="form">
                <Schedule/>
                <div className="links">
                    {/* TODO: poner links correctos */}
                    <Link to='/quick-recommendation/education-level'>
                        <a className="back">Atrás</a>
                    </Link>
                    <Link to=''>
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
)(QuickRecommendationSchedule);
