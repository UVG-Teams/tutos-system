import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Navbar from '../Navbar';
import Tutor from '../TutorList/Tutor';

const TutorList = ({tutores,}) => (
  <div>
    <Navbar/>
    <div className='inputs-container'>
      <input
        className='search-input'
        type='text'
        placeholder='Busqueda...'
      />
      <select className='search-selector'>
        <option>Institución</option>
        <option>Matería</option>
        <option>Rating</option>
        <option>Precio</option>
      </select>
      <button className='search-button'>
        Buscar
      </button>
    </div>
    {tutores.map(tutor => (
      <Tutor name={tutor.nombre} subjects={tutor.temas} email={tutor.correo} institution={tutor.institución} price={tutor.precio} rating={tutor.calificación}/>
    ))}
  </div>
);

export default connect(
  state => ({
    tutores: [
      {
        'nombre': 'Marco Fuentes',
        'temas': 'Matemática, Física, Programación',
        'institución': 'Universidad del Valle de Guatemala',
        'correo': 'marco@gmail.com',
        'precio': '100.00Q',
        'calificación': '5.0',
      },
      {
        'nombre': 'Alejandro García',
        'temas': 'Química, Biología',
        'institución': 'Universidad del Valle de Guatemala',
        'correo': 'alejandro@gmail.com',
        'precio': '90.00Q',
        'calificación': '4.0',
      },
      {
        'nombre': 'Daniela Marroquín',
        'temas': 'Matemática, Química',
        'institución': 'Universidad San Carlos',
        'correo': 'daniela@gmail.com',
        'precio': '120.00Q',
        'calificación': '4.0',
      },
      {
        'nombre': 'Javier Martínez',
        'temas': 'Física',
        'institución': 'Universidad Rafaer Landivar',
        'correo': 'javier@gmail.com',
        'precio': '150.00Q',
        'calificación': '3.0',
      },
    ]
  }),
)(TutorList);