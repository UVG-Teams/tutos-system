import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';


import './styles.css';
import Index from '../Index';
import Login from '../Login';

import SignUpTutor from '../SignUpTutor';
import SignUpTutorado from '../SignUpTutorado';


import MainPageTutor from '../MainPageTutor';
import Calendar from '../Calendar';
import Mensajes from '../Mensajes';
import Tutores from '../Tutores';
import MyAccount from '../MyAccount';

import QuickRecommendationSubject from '../Quick_Recommendation/Subject';
import QuickRecommendationLocation from '../Quick_Recommendation/Location';
import QuickRecommendationEducationLevel from '../Quick_Recommendation/Education_Level';
import QuickRecommendationSchedule from '../Quick_Recommendation/Schedule';
import Schedule from '../Schedule';


const store = configureStore();

const App = () => (
    <div className = "App">
        <Provider store = {store}>
            <Router>
                <Switch>

                    <Route path='/signupTutorado'>
                        <SignUpTutorado/>

                    <Route path='/mainPageTutor'>
                        <MainPageTutor />
                    </Route>
                    <Route path = '/login'>
                        <Login/>
                    </Route>
                    <Route path='/calendar'>
                        <Calendar />
                    </Route>
                    <Route path='/mensajes'>
                        <Mensajes />
                    </Route>
                    <Route path='/tutores'>
                        <Tutores />
                    </Route>
                    <Route path='/myAccount'>
                        <MyAccount />

                    </Route>
                    <Route path='/signup'>
                        <SignUpTutor/>
                    </Route>
                    <Route path = '/quick_recommendation/subject'>
                        <QuickRecommendationSubject/>
                    </Route>
                    <Route path = '/quick_recommendation/location'>
                        <QuickRecommendationLocation/>
                    </Route>
                    <Route path = '/quick_recommendation/education_level'>
                        <QuickRecommendationEducationLevel/>
                    </Route>
                    <Route path = '/quick_recommendation/schedule'>
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

