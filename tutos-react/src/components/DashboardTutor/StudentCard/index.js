import React , { Fragment } from 'react'

import './styles.css'; 
import '../../index.css';
// import '../../normalize.css';

import social from './../../static/social.png'

const card = ({image, nombre, clases, recent}) =>{
  return(
    <div className = 'studentcard'>
      <div className = 'student'>
        <img src = {social /*deberia ser image*/} className = 'imageStudent' />
        <h2 className = 'text'> {nombre} </h2>
      </div>
      <div>
        <h3 className = 'text'> { clases.map(
          (value,index) => {
            return index===(clases.length-1) ? value :  value+', '
          }
        ) } </h3>
        <h3 className = 'text'>{recent}</h3>
      </div>
    </div>
  )
}

export default card