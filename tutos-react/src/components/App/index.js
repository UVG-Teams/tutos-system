import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from '../../store';

const store = configureStore();

const App = () => (
    <Provider store = {store}>
        <Router>
            <Switch>
                {/* <Route path = '/' component = {} /> */}
            </Switch>
        </Router>
    </Provider>
);

export default App;

 