import React,  { Fragment } from 'react'

import './styles.css'
import './../../index.css'
import './../../normalize.css'

const Card = ({image, header, backgroundColor, body, onClick}) => 
    {
        return(
            <Fragment>
            <div 
                className = 'Card' 
                style = {{backgroundColor : backgroundColor}}
                onClick = {onClick}
                >
                <div className = 'Card-Header'>
                    <img src = {image} alt = '' width='50rem' height='50rem'/>
                    <h3>{header}</h3>
                </div>
                <div className = 'Card-Body'>
                    {body ? body.map ( (value, key) => 
                        <div className = 'Card-body-item' key={key}>
                            {value}
                        </div>) : ''
                    }
                </div>
            </div>
            </Fragment>
    )
    }
export default Card;