import React from 'react';
import { connect } from 'react-redux';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

import instagram from '../../static/instagram.png';
import twitter from '../../static/twitter.png';

const Footer = () => (
    <div className="Footer">
        <div>
            <img src={ instagram } className="Footer-img" />
            <img src={ twitter } className="Footer-img" />
        </div>
        <a href="https://www.youtube.com">{'TODO'}</a>
    </div>
);

export default Footer;
