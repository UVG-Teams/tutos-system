import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../../reducers';
import * as actions from '../../../actions/signUpTutor';


import './styles.css'; 
import '../../../index.css';

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

const TutorAdditionalInfo = ({onSubmit, isLoading}) => {
    const [language, changeLanguage] = useState(''); 
    const [institution, changeInstitution] = useState('');
	const [career, changeCareer] = useState('');
    const [price, changePrice] = useState('');
    const [phone, changePhone] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [location, changeLocation] = useState('');
    
    return (
        <div className="form-additionalinfo-tutor">
            <div className="phone-date-tutor">
                {labelInput("Teléfono",phone,changePhone)}
                <div className="date-tutor">
                    <label className="label-fecha-tutor">
                        {"Fecha de nacimiento"}
                    </label>
                    <DatePicker  className="input-date-tutor" selected={startDate} value={startDate} onChange={date => setStartDate(date)} />
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
        </div>
    )
}

export default connect(
    state => ({
        isLoading: selectors.getIsSigningUpTutorado(state),
    })
)(TutorAdditionalInfo);

