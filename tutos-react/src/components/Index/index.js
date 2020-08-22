import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Fade } from 'react-slideshow-image';
import slide0 from '../../static/img01.png';
import slide1 from '../../static/img01.png';
import school24px from '../../static/baseline_school_black_18dp.png';
import teacher from '../../static/teacher.png';
import idea from '../../static/idea.png';
import money from '../../static/money.png';

import './styles.css'; 
import '../../index.css';
// import '../../normalize.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

const fadeImages = [
    '../../static/slide1.jpg',
    '../../static/slide1.jpg',
    '../../static/tutos.png'
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => {
        // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

function slides(){
    return(
        <div className = "slidesContainer" >
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slide0} className = "img"/>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slide0} className="img" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slide1} className="img"/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

function column(img, header) {
    return(
        <div className = "column" >
            <img src = {img} className  = "img0"/>
            <h2 align = 'center'> {header} </h2>
        </div>
    )
}

function columns () {
    return(
        <div className = "columns">
            {column(teacher, 'Clases individuales o grupales')}
            {column(idea, 'Expande tus conocimientos')}
            {column(money, 'Conoce nuestras tarifas')}
        </div>
    )
}

function registerBtns () {
    return(
        <div className = 'index-buttons-sl'>
            <h1>Explora Tuto's</h1>
            <div className = 'index-buttons-buttons'>
                <div className="container-signup-tutorado">
                    <p>Regístrate como </p>
                    <h1>Estudiante</h1>
                    <ul>
                        <li>Busca tutores locales</li>
                        <li>Comunícate con cualquiera de nuestros tutores gratis</li>
                        <li>Encuentra tutores sobre cualquier materia</li>
                        <li>Encuentra tutores cerca de ti</li>
                        <li>Encuentra tutores en todos los niveles academicos</li>
                    </ul>
                    <Link to = 'signupTutorado'>
                        <div className = 'index-button-bottom1'>
                            <a className="aReg">Registrarme</a>
                        </div>
                    </Link>
                </div>
                <div className="container-signup-tutor">
                    <p>Regístrate como </p>
                    <h1>Tutor</h1>
                    <ul>
                        <li>Crea tu propio perfil y publica tus servicios</li>
                        <li>Crea tu cuenta totalmente gratis</li>
                        <li>Publica tu horario disponible para dar tutorias</li>
                        <li>Organiza tu tiempo con nuestro tablero para tutores</li>
                        <li>Enceuntra una fuente de ingreso economico extra</li>
                    </ul>
                    <Link to = 'signup'>
                        <div className = 'index-button-bottom2'>
                            <a className="aReg">Registrarme</a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Index = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className = "Slides">
                {slides()}
            </div>
            {columns()}
            {registerBtns()}
            <Footer />
        </Fragment>
    );
};

export default Index;