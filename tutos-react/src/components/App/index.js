import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';

import './styles.css'; 
import '../../index.css';
import '../../normalize.css';

import Index from '../Index';
import Login from '../Login';

import SignUpTutor from '../SignUpTutor';
import SignUpTutorado from '../SignUpTutorado';
import SignUpTutorWizard from '../SignUpTutorWizard';

import DashboardTutor from '../DashboardTutor';
import Construction from '../Construction';

import QuickRecommendationSubject from '../QuickRecommendation/Subject';
import QuickRecommendationLocation from '../QuickRecommendation/Location';
import QuickRecommendationSchedule from '../QuickRecommendation/Schedule';
import QuickRecommendationEducationLevel from '../QuickRecommendation/EducationLevel';
import Schedule from '../Schedule';


const store = configureStore();

const App = () => (
    <div className = "App">
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path='/signupTutorado'>
                        <SignUpTutorado/>
                    </Route>

                    <Route path='/dashboardTutor'>
                        <DashboardTutor />
                    </Route>
                    
                    <Route path='/calendar'>
                        <Construction />
                    </Route>
                    
                    <Route path='/messages'>
                        <Construction />
                    </Route>
                    
                    <Route path='/profile'>
                        <Construction />
                    </Route>
                    
                    <Route path='/signup'>
                        <SignUpTutor/>
                    </Route>

                    <Route path='/wizard'>
                        <SignUpTutorWizard/>
                    </Route>
                    
                    <Route path = '/quick-recommendation/subject'>
                        <QuickRecommendationSubject/>
                    </Route>

                    <Route path = '/quick-recommendation/location'>
                        <QuickRecommendationLocation/>
                    </Route>
                    
                    <Route path = '/quick-recommendation/education-level'>
                        <QuickRecommendationEducationLevel/>
                    </Route>
                    
                    <Route path = '/quick-recommendation/schedule'>
                        <QuickRecommendationSchedule/>
                    </Route>
                    
                    <Route path = '/schedule'>
                        <Schedule/>
                    </Route>

                    <Route path = '/'>
                        <Index/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </div>
);

export default App;

