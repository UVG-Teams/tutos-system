import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';


import './styles.css';
import Index from '../Index';
import Login from '../Login';
import SignUpTutor from '../SignUpTutor';
import SignUpTutorado from '../SignUpTutorado';

const store = configureStore();

const App = () => (
    <div className = "App">
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path='/signupTutorado'>
                        <SignUpTutorado/>
                    </Route>
                    <Route path='/signup'>
                        <SignUpTutor/>
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

 