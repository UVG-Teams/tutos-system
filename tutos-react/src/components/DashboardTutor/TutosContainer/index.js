import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import './styles.css'

const container = () => {
  return (
    <div className = 'tutor-tutos-container'>
      <div className = 'tutos-container-column'>
        Estado 1
      </div>
      <div className='tutos-container-column'>
        Estado 2
      </div>
      <div className='tutos-container-column'>
        Estado 3
      </div>
      <div className='tutos-container-column'>
        Estado 4
      </div>
    </div>
  )
}