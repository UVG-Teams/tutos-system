import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css'; 


const Location = ({state}) => {
    return (
        <div className="page">
            <div className="schedule_form">
                <h2>¿Cuándo estás disponible para la tutoría?</h2>
                <div className="days">
                    <p className="day">Lun</p>
                    <p className="day">Mar</p>
                    <p className="day">Mie</p>
                    <p className="day">Jue</p>
                    <p className="day">Vie</p>
                    <p className="day">Sab</p>
                    <p className="day">Dom</p>
                </div>
                <div className="container">
                    <div className="labels">
                        <div>
                            <p className="mainLabel">Mañana</p>
                            <p>Antes de las 12 p.m.</p>
                        </div>
                        <div>
                            <p className="mainLabel">Tarde</p>
                            <p>12 - 5 p.m.</p>
                        </div>
                        <div>
                            <p className="mainLabel">Noche</p>
                            <p>Después de las 5 p.m.</p>
                        </div>
                    </div>
                    <div className="monday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="tuesday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="wednesday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="thursday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="friday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="saturday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                    <div className="sunday">
                        <div className="checkboxes">
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                            <input type="checkbox" value="mon" className="check"/>
                        </div>
                    </div>
                </div>
                <div className="free">
                    <input type="radio" className="radioButton" value="free"/>
                    <label for="free">En cualquier momento</label>
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
