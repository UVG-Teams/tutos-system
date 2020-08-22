import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css'; 
import '../../normalize.css';


import Multistep from 'react-multistep';
import PersonalInfo from './Tutor_Personal_info';
import AdditionalInfo from './Tutor_Additional_Info';
import SuccessMessage from './Tutor_Success';

const steps = [
    {name: 'Personal_Info', component: <PersonalInfo/>},
    {name: 'Additional_Info', component: <AdditionalInfo/>},
    {name: 'Done', component: <SuccessMessage/>}
]

const Register_Wizard = () => (
    <Multistep showNavigation={true} steps={steps}/>
)

export default Register_Wizard;