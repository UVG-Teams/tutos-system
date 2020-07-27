import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routerActions } from 'react-router-redux';
import { configureStore } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';
import { 
    connectedRouterRedirect,
    connectedReduxRedirect,
} from 'redux-auth-wrapper/history4/redirect';

import './styles.css';
import {
    tokenReviewTime,
} from '../../settings';

import * as selectors from '../../reducers';

import TokenRefresh from '../TokenRefresh';

import Index from '../Index';
import SignUpTutorado from '../SignUpTutorado';
import SignUpTutorWizard from '../SignUpTutorWizard';

import DashboardTutor from '../DashboardTutor';
import DashboardTutorado from '../DashboardTutorado';
import Construction from '../Construction';

// import QuickRecommendation from '../QuickRecommendation';
import Schedule from '../Schedule';
import Inbox from '../Views/Inbox';


const UserIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/',
    authenticatedSelector: selectors.isAuthenticated,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'userIsAuthenticated',
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/inbox',
        exact: true,
        component: UserIsAuthenticated(Inbox),
    },
    {
        path: '/dashboardTutor',
        exact: true,
        component: UserIsAuthenticated(DashboardTutor),
    },
    {
        path: '/signup',
        exact: true,
        component: SignUpTutorWizard,
    },
    {
        path: '/signupTutorado',
        exact: true,
        component: SignUpTutorado,
    },
    {
        path: '/dashboardTutorado',
        exact: true,
        component: UserIsAuthenticated(DashboardTutorado),
    },
    {
        path: '/calendar',
        exact: true,
        component: UserIsAuthenticated(Construction),
    },
    {
        path: '/messages',
        exact: true,
        component: UserIsAuthenticated(Construction),
    },
    {
        path: '/profile',
        exact: true,
        component: UserIsAuthenticated(Construction),
    },
    {
        path: '/quick-recommendation',
        exact: true,
        component: UserIsAuthenticated(Construction),
    },
    {
        path: '/schedule',
        exact: true,
        component: UserIsAuthenticated(Schedule),
    },
];

const { store, persistor } = configureStore();

const App = () => (
    <div className = "App">
        <Provider store = {store}>
            <PersistGate loading = { null } persistor = { persistor }>
                <TokenRefresh reviewTime={tokenReviewTime}/>
                <Router>
                    <Switch>
                        {
                            routes.map( route => (
                                <Route
                                    // exact
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))
                        }
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    </div>
);

export default App;
