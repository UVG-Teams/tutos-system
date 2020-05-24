import React from 'react';
import { Link } from 'react-router-dom';

// import './styles.css'; 
import '../../index.css';
// import '../../normalize.css';

const Construction = () => (
    <div>
        <h2>{ 'EN CONSTRUCCION' }</h2>
        <Link to=''>
            <button>{ "Regresar a pagina principal" }</button>
        </Link>
    </div>
);

export default Construction;
