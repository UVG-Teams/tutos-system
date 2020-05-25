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
        <div className = "column white-text" >
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
            <h1>¡Registrate!</h1>
            <div className = 'index-buttons-buttons'>
                <Link to = 'signup'>
                    <div className = 'index-button-bottom'>
                        <a>Tutor</a>
                    </div>
                </Link>
                <Link to = 'signupTutorado'>
                    <div className = 'index-button-bottom'>
                        <a>Tutorado</a>
                    </div>
                </Link>
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
            < div className = "parrafito white-text" >
                <h2>
                    ¡Nos adaptamos a ti!
                </h2>
                <div className = 'index-descripcion white-text'>
                    <h4>
                        {'En Tuto\'s puesdes organizar una tutoría individual o grupal. Tú decides la hora y el lugar, nosotros llegamos a ti. Refuerza tus conocimientos y mejora tus notas, a un precio accesible. '}
                    </h4>
                </div>
            </div >
            {columns()}
            {registerBtns()}
            <Footer />
        </Fragment>
    );
};

export default Index;