import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';


import './styles.css';
import Index from '../Index';
import Login from '../Login';
import SignUp from '../SignUp';
import QuickRecommendationSubject from '../Quick_Recommendation/Subject';
import QuickRecommendationLocation from '../Quick_Recommendation/Location';

const store = configureStore();

const App = () => (
    <div className = "App">
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path = '/login'>
                        <Login/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path = '/quick_recommendation/subject'>
                        <QuickRecommendationSubject/>
                    </Route>
                    <Route path = '/quick_recommendation/location'>
                        <QuickRecommendationLocation/>
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

 