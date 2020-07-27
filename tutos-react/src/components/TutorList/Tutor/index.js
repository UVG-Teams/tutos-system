import React from 'react';

import './styles.css';

const Tutor = ({name, subjects, email, institution, price, rating}) =>(
  <div className='container'>
    <div className='pic-container'>
      <div className='profile-pic'/>
    </div>
    <div className='info-container'>
      <p>{name}</p>
      <p>{subjects}</p>
      <p>{email}</p>
      <p>{institution}</p>
      <a>Ver más</a>
    </div>
    <div className='price-container'>
      <div className='price'>
        <p>{price}</p>
        <div className='rate-container'>
          <p>{rating}</p>
          <div className='star'/>
        </div>
      </div>
    </div>
  </div>
);

export default Tutor;