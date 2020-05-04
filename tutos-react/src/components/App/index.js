import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';

import Index from '../Index';

const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route path = '/' component = { Index } />
            </Switch>
        </Router>
    </Provider>
);

export default App;

 