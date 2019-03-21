import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from './navbar';
import { PageLogin } from '../pages/page-login';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path="/" exact component={PageLogin} />
                </div>
            </Router>
        );
    }
}