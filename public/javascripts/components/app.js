import React from 'react';

import { Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { Navbar } from './navbar';

import { PageLogin } from '../pages/page-login';
import { PageSignUp } from '../pages/page-sign-up';
import { PageHome } from '../pages/page-home';
import { PageTimeLog } from '../pages/page-time-log';

import history from '../browser-history';

export class AppComponent extends React.Component {
    componentDidMount() {
        // TODO: ping server to get current user if current user is not available.
    }

    render() {
        const { currentUser } = this.props;

        return (
            <Router history={history}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Route path="/login" component={PageLogin} />
                    <Route path="/sign-up" component={PageSignUp} />
                    {(currentUser && <Route path="/home" exact component={PageTimeLog} />) || (
                        <Route path="/home" exact component={PageHome} />
                    )}
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

const App = connect(mapStateToProps)(AppComponent);

export { App };
