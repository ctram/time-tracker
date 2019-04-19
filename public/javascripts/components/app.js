import React from 'react';

import configureStore from '../configureStore';

import { Router, Route } from 'react-router-dom';

import { Navbar } from './navbar';

import { PageLogin } from '../pages/page-login';
import { PageSignUp } from '../pages/page-sign-up';
import { PageHome } from '../pages/page-home';

import history from '../browser-history';

const store = configureStore({ currentUser: null });

export class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path="/login" component={PageLogin} />
                    <Route path="/sign-up" component={PageSignUp} />
                    <Route path="/home" exact component={PageHome} />
                </div>
            </Router>
        );
    }
}
