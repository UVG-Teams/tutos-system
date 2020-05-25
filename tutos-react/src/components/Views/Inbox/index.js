import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import './styles.css'; 

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Conversations from '../../Conversations/List';
import Conversation from '../../Conversations/Conversation';


const Inbox = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className='page-content'>
                <Conversations />
                <Conversation />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Inbox;