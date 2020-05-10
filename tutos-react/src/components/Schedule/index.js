import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css'; 


const Location = ({state}) => {
    return (
        <div className="page">
            <div className="schedule_form">
                <h2>¿Cuándo estás disponible para la tutoría?</h2>
                <div className="morning">
                    <div className="labels">
                        <p className="mainLabel">Mañana</p>
                        <p>Antes de las 12 p.m.</p>
                    </div>
                    <div className="checkboxes">
                        <input type="checkbox" value="mon"/>
                        <input type="checkbox" value="tue"/>
                        <input type="checkbox" value="wed"/>
                        <input type="checkbox" value="thu"/>
                        <input type="checkbox" value="fri"/>
                        <input type="checkbox" value="sat"/>
                        <input type="checkbox" value="sun"/>
                    </div>
                </div>

                <div className="links">
                    {/* TODO: poner links correctos */}
                <Link to='/quick_recommendation/location'>
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
)(Location);
