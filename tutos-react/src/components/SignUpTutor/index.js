import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom'

import * as selectors from '../../reducers';
import * as actions from '../../actions/signUpTutor';
import '../SignUpTutor/styles.css'; 

const SignUpTutor = ({onSubmit, isLoading}) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [name, changeName] = useState('');
  const [lastname, changeLastname] = useState('');
  const [mail, changeMail] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const [language, changeLanguage] = useState('');
  const [location, changeLocation] = useState('');
  const [phone, changePhone] = useState('');
  const [institution, changeInstitution] = useState('');
  const [price, changePrice] = useState('');
	const [career, changeCareer] = useState('');
	const [startDate, setStartDate] = useState(new Date());


  return (
    <Fragment>
      <div className="front-screen">
				{"Crear cuenta de tutor"}
				<Link className="inicio" to='/'>
          <a className="linksU">Regresar a inicio</a>
        </Link>
      </div>
      <div className="container">
			<div className="form-contanier">
      <div className="form-tutor">
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Nombre"}
              </label>
              <input className="input" type="text" placeholder="Nombre" value={name} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Apellido"}
              </label>
              <input className="input" type="text" placeholder="Apellido" value={lastname} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Usuario"}
              </label>
              <input className="input" type="text" placeholder="Usuario" value={username} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Email"}
              </label>
              <input className="input" type="text" placeholder="Email" value={mail} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Contraseña"}
              </label>
              <input className="input" type="text" placeholder="Contraseña" value={password} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Confirmar constraseña"}
              </label>
              <input className="input" type="text" placeholder="Confirmar contraseña" value={name} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Teléfono"}
              </label>
              <input className="input" type="text" placeholder="Teléfono" value={phone} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Carrera"}
              </label>
              <input className="input" type="text" placeholder="Carrera" value={career} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
      <p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Precio"}
              </label>
              <input className="input" type="text" placeholder="Precio" value={price} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
			<p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Localidad"}
              </label>
              <input className="input" type="text" placeholder="Localidad" value={location} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
			<p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Institución"}
              </label>
              <input className="input" type="text" placeholder="Institución" value={institution} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
			<p className="p-input">
          <div className="input-container">
              <label className="Label">
                  {"Idioma"}
              </label>
              <input className="input" type="text" placeholder="Idioma" value={language} onChange={e => changeName(e.target.value)}  />
          </div>
      </p>
			</div>
          <div className="date-container">
						<div className="p-date">
              <label className="Label">
                  {"Fecha de nacimiento"}
              </label>
              <DatePicker  className="input" selected={startDate} value={startDate} onChange={date => setStartDate(date)} />
						</div>
                <button className="register-button" type="submit"
                  onClick = {() => onSubmit(name, lastname,username,mail,password,confirmPassword)}>
                  	{'Crear cuenta de tutor'}
                </button>
					</div>
      </div>
			</div>
    </Fragment>
  )
}

export default connect(
    state => ({
        isLoading: selectors.getIsSigningUpTutorado(state),
    })
)(SignUpTutor);