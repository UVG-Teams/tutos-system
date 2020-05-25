import React, { Fragment } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

// const match = useRouteMatch(); 

import './styles.css'; 
import './../../index.css';
import '../../normalize.css';

const sideBar = ({isTutorado = true}) => (

  <div className='sidebar'>
    <h1>{'Tablero'}</h1>
    <Link to = {`/calendar`}>
      <div className='options'>
        Calendario
      </div>
    </Link>
    <Link to = '/messages'>
      <div className='options'>
        Mensajes
      </div>
    </Link>
    <Link to = 'profile'>
    <div className='options' >
      Mi cuenta
    </div>
    </Link>
    {isTutorado!==true ? (
        <Link to = 'newTuto'>
            <div className = 'options' align = 'center'>
                Nueva Tutoría
            </div>
        </Link>
    ) : (<></>)}
  </div>
)

export default sideBar