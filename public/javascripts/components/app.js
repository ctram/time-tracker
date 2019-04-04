import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from './navbar';
import { PageLogin } from '../pages/page-login';
import { PageHome } from '../pages/page-home';
import { PageSignUp } from '../pages/page-sign-up';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path="/login" exact component={PageLogin} />
                    <Route path="/sign-up" exact component={PageSignUp} />
                    {/*
                        <Route path="/home" exact component={PageHome} />
                    */}
                </div>
            </Router>
        );
    }
}
