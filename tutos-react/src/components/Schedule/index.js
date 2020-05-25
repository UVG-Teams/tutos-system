import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../index.css';
// import '../../normalize.css';


const Schedule = ({state}) => {
    return (
        <div className="page">
            <div className="schedule_form">
                <h2>¿Cuándo estás disponible para la tutoría?</h2>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <td></td>
                                <td>Lun</td>
                                <td>Mar</td>
                                <td>Mie</td>
                                <td>Jue</td>
                                <td>Vie</td>
                                <td>Sab</td>
                                <td>Dom</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b>Mañana</b>
                                    <br/>
                                    <small>Antes de las 12 p.m.</small>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td> 
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>Tarde</b>
                                    <br/>
                                    <small>12 - 5 p.m.</small>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td> 
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <b>Noche</b>
                                    <br/>
                                    <small>Después de las 5 p.m.</small>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox"> 
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox"> 
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                                <td>
                                    <div className="checkbox">
                                        <input type="checkbox" value=""></input>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
)(Schedule);
