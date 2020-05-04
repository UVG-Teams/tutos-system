import React from 'react';
import { connect } from 'react-redux';
import './styles.css'; 

import Navbar from '../Navbar';

const Index = ({state}) => {
    return (
        <div className="full_screen">
            <Navbar/>
        </div>
    );
};

export default connect(
    (state) => ({
        state: state,
    })
)(Index);