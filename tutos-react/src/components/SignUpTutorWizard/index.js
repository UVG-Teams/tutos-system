import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../normalize.css';


import Multistep from 'react-multistep';
import Navbar from '../Navbar';
import PersonalInfo from './Tutor_Personal_info';
import AdditionalInfo from './Tutor_Additional_Info';

const steps = [
    {name: 'Step1', component: <PersonalInfo/>},
    {name: 'Step2', component: <AdditionalInfo/>},
    {name: 'Willi', component: <Navbar/>}
    // {name: 'Step2', component: <Step2/>},
    // {name: 'Result', component: <Result/>}
]

const Register_Wizard = () => (
    <Multistep showNavigation={true} steps={steps}/>
)

export default Register_Wizard;