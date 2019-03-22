import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from './navbar';
import { PageLogin } from '../pages/page-login';
import { PageHome } from '../pages/page-home';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path="/login" exact component={PageLogin} />
                    <Route path="/home" exact component={PageHome} />
                </div>
            </Router>
        );
    }
}