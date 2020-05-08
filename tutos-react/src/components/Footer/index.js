import React from 'react';
import { connect } from 'react-redux';
import './styles.css'; 

import instagram from '../../static/instagram.png';
import twitter from '../../static/twitter.png';

const Footer = ({state}) => {
    return (
        <div className="footer">
            <div className  ="imgfooter">
                <img src = {instagram} className = "imgfooter" />
                <img src={twitter} className="imgfooter" />
            </div>
            <a href = "https://www.youtube.com">{'Hola buenas'}</a>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Footer);