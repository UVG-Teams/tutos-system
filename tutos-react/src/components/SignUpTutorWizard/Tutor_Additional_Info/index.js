import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../../reducers';
import * as actions from '../../../actions/signUpTutor';


import './styles.css'; 
import '../../../index.css';
import '../../../normalize.css';

const labelInput = (labelText, value, onChange) => {
    return (
        <p className="p-input-tutorW">
            <div className="div-input-containerW">
                <label className="Label-tutorW">
                    {labelText}
                </label>
                <input className="input-tutorW" type="text" value={value} onChange={e => onChange(e.target.value)}  />
            </div>
        </p>
    )
};

const labelInputLocation = (labelText, value, onChange) => {
    return (
        <p className="p-input-tutorW">
            <div className="div-input-containerW">
                <label className="label-tutor-location">
                    {labelText}
                </label>
                <input className="input-location-tutor" type="text" value={value} onChange={e => onChange(e.target.value)}  />
            </div>
        </p>
    )
};

const TutorAdditionalInfo = ({state, info,onSubmit, isLoading}) => {
    const [language, changeLanguage] = useState(''); 
    const [institution, changeInstitution] = useState('');
	const [career, changeCareer] = useState('');
    const [price, changePrice] = useState('');
    const [phone, changePhone] = useState('');
    const [birthdate, changeBirthdate] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [location, changeLocation] = useState('');
    const {username, password,last_name, first_name, email}= info;
    
    return (
        <div className="tutor-additionalinfo-generalContainer">
            <div className="form-additionalinfo-tutor">
                <div className="phone-date-tutor">
                    {labelInput("Teléfono",phone,changePhone)}
                    <div className="date-tutor">
                        <label className="label-fecha-tutor">
                            {"Fecha de nacimiento"}
                        </label>
                        <DatePicker  className="input-date-tutor" dateFormat="yyyy-MM-dd" selected={startDate} value={startDate} 
                        onChange={date => {
                            const day=date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();
                            const birthdate= [year, month, day].join('-');
                            setStartDate(date);
                            changeBirthdate(birthdate);
                            }
                        } />
                    </div>
                </div>
                <div className="institution-career-tutor">
                    {labelInput("Institución",institution,changeInstitution)}
                    {labelInput("Carrera",career,changeCareer)}
                </div>
                <div className="language-price-tutor">
                    {labelInput("Idioma",language,changeLanguage)}
                    {labelInput("Precio",price,changePrice)}
                </div>
                <div className="location-tutor">
                    {labelInputLocation("Localidad",location,changeLocation)}
                </div>
                <button className="button-create-tutor" onClick={()=>onSubmit(first_name,last_name,username,email,password,phone, birthdate, price)}>
                    Crear cuenta
                </button>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        state:state,
        info: selectors.getSignUpUserInfoTutor(state),
        isLoading: selectors.getIsSigningUpTutor(state),
    }),
    dispatch => ({
        onSubmit(first_name, last_name, username, email, password, phone, birthdate, price) {
                dispatch(
                    actions.startSignUpTutor(first_name, last_name, username, email, password, 
                         phone, birthdate, price),
                );
            },
    }),
)(TutorAdditionalInfo);

