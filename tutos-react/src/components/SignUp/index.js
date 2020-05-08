import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import slide0 from '../../static/slide0.jpg';
import slide1 from '../../static/slide1.jpg';
import school24px from '../../static/baseline_school_black_18dp.png';
import teacher from '../../static/teacher.png';
import idea from '../../static/idea.png';
import money from '../../static/money.png';
import instagram from '../../static/instagram.png';
import twitter from '../../static/twitter.png';
import './styles.css'; 

const Index = ({ state }) => {
    return (
        <Fragment>
            <div className="full_screen">
                <h1>{'SIGN UP'}</h1>
                <h2>{'UNDER CONSTRUCTION'}</h2>
            </div>
        </Fragment>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Index);