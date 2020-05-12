import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './styles.css'; 
import logo from '../../static/tutoswhite.png'; 
import profile from '../../static/social.png'; 
import bars from '../../static/bars.png'; 
const Header = ({name}) => {
    return (  
        <div className="header">
            <div className="logo_container">
                <img src = {logo} className = "logo"></img>
            </div>
            <div className="profile_container">
                <img src = {profile} className = 'image'></img>
                <h3>{'TU NOMBRE AQUI'}</h3>
                <img src = {bars} className = 'image'></img>
            </div>
        </div >
    );
};
export default connect(
    (state) => ({
        name: state,
    })
)(Header);