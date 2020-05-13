import React, { Fragment } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

// const match = useRouteMatch(); 

const sideBar = () => (

  <div className='sidebar'>
    <h1>{'Tablero'}</h1>
    <Link to = {`/calendar`}>
      <div className='options'>
        Calendario
      </div>
    </Link>
    <Link to = '/mensajes'>
      <div className='options'>
        Mensajes
      </div>
    </Link>
    <Link to = '/tutores'>
      <div className='options'>
        Tutores
      </div>
    </Link>
    <Link to = 'myAccount'>
    <div className='options'>
      Mi cuenta
    </div>
    </Link>

  </div>
)

export default sideBar