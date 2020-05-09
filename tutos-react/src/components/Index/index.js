import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import slide0 from '../../static/slide0.jpg';
import slide1 from '../../static/slide1.jpg';
import school24px from '../../static/baseline_school_black_18dp.png';
import teacher from '../../static/teacher.png';
import idea from '../../static/idea.png';
import money from '../../static/money.png';
import './styles.css'; 

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
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
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

function text(){
    return(
         < div className = "parrafito" >
            <h2>
                {'Hola algo'}
            </h2>
            <p>
                {'Este es un parrafito. Este es un parrafito. Este es un parrafito. Este es un parrafito. Este es un parrafito. Este es un parrafito. Este es un parrafito. Este es un parrafito. '}
            </p>
        </div >
    )
}

function column(img, header, text) {
    return(
        <div className = "column" >
            <img src = {img} className  = "img0"/>
            <h3> {header} </h3>
            <h2>{text}</h2>
        </div>
    )
}

function columns () {
    return(
        <div className = "columns">
            {column(teacher, 'Imageeeen','hola')}
            {column(idea, 'tst', 'hola')}
            {column(money, 'tst', 'hola')}
        </div>
    )
}

const Index = ({state}) => {
    return (
        <Fragment>
            <div className="front_screen">
                <Navbar/>
            </div>
            <div className = "Slides">
                {slides()}
            </div>
            {text()}
            {columns()}
            <Footer />
        </Fragment>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Index);