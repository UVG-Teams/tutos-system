import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

import Navbar from '../Navbar';
import Footer from '../Footer';
import FavTutor from './FavTutor';


const FavTutores = ({tutores}) => {
    return (
        <Fragment>
            <Navbar/>
            <div class = 'divTutoresFav'>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rate</th>
                        <th>Contacto</th>
                        <th>Chat</th>
                    </tr>
                    {
                        tutores.map(tutor => {
                            <FavTutor id = {tutor.id}/>
                        }) 
                    }
                </table>
            </div>
            <Footer/>

        </Fragment>
    );
};

export default connect(
    (state)=>({
        tutores:selectors.getTutores(state)
    })
)(FavTutores)
