import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUpTutor';

import './styles.css'; 
import '../../index.css';


const labelInput = (labelText, value, onChange) => {
    return (<p className="p-input-tutor">
          <div className="div-input-container">
              <label className="Label-tutor">
                  {labelText}
              </label>
              <input className="input-tutor" type="text" placeholder={labelText} value={value} onChange={e => onChange(e.target.value)}  />
          </div>
      </p>)
};

const SignUpTutor = ({onSubmit, isLoading}) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [name, changeName] = useState('');
  const [lastname, changeLastname] = useState('');
  const [mail, changeMail] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const [language, changeLanguage] = useState(''); //---aqui
  const [location, changeLocation] = useState('');
  const [phone, changePhone] = useState('');
  const [institution, changeInstitution] = useState('');
  const [price, changePrice] = useState('');
	const [career, changeCareer] = useState('');
	const [startDate, setStartDate] = useState(new Date());


  return (
    <Fragment>
      <div className="front-screen-tutor">
				{"Crear cuenta de tutor"}
				<Link className="inicio" to='/'>
        	<a className="linksU">Regresar a inicio</a>
        </Link>
      </div>
      <div className="container-tutor">
				<div className="form-contanier-tutor">
      		<div className="form-tutor">
        		{labelInput("Nombre",name,changeName)}
        		{labelInput("Apellido",lastname,changeLastname)}
						{labelInput("Usuario",username,changeUsername)}
						{labelInput("Email",mail,changeMail)}
						{labelInput("Contraseña",password,changePassword)}
						{labelInput("Confirmar contraseña",confirmPassword,changeConfirmPassword)}
						{labelInput("Teléfono",phone,changePhone)}
						{labelInput("Carrera",career,changeCareer)}
						{labelInput("Precio",price,changePrice)}
						{labelInput("Localidad",location,changeLocation)}
						{labelInput("Institución",institution,changeInstitution)}
						{labelInput("Idioma",language,changeLanguage)}
					</div>
          <div className="date-container-tutor">
						<div className="p-date-tutor">
              <label className="Label-tutor">
                  {"Fecha de nacimiento"}
              </label>
              <DatePicker  className="input-tutor" selected={startDate} value={startDate} onChange={date => setStartDate(date)} />
						</div>
                <button className="register-button-tutor" type="submit"
                  onClick = {() => onSubmit(name, lastname,username,mail,password,confirmPassword)}>
                  {'Crear cuenta de tutor'}
                </button>
					</div>
      	</div>
			</div>
    </Fragment>
  )
};

export default connect(
    state => ({
        isLoading: selectors.getIsSigningUpTutorado(state),
    })
)(SignUpTutor);