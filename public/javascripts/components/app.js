import React from 'react';

import { Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { Navbar } from './navbar';

import { PageLogin } from '../pages/page-login';
import { PageSignUp } from '../pages/page-sign-up';
import { PageHome } from '../pages/page-home';
import { PageTimeLog } from '../pages/page-time-log';

import { fetchPlus } from '../helpers/fetch-plus';

import { setCurrentUser } from '../actions/session';

import history from '../browser-history';

export class AppComponent extends React.Component {
    componentDidMount() {
        // TODO: ping server to get current user if current user is not available.

        if (this.props.currentUser) {
            return;
        }

        let _this = this;

        fetchPlus('http://localhost:3000/users/authenticate', {
            method: 'GET'
        })
            .then(res => {
                if (res.status === 401) {
                    throw Error('Not logged in.');
                }

                return res.json();
            })
            .then(json => {
                console.log(`Current User: ${json.user}`);
                _this.props.loginSuccessful(json.user);
            })
            .catch(err => {
                alert(err);
                console.error(err);
            });
    }

    render() {
        const { currentUser } = this.props;

        return (
            <Router history={history}>
                <div>
                    <Navbar />
                </div>
                <div className="pt-3">
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

const mapDispatchToProps = dispatch => {
    return {
        loginSuccessful: user => {
            dispatch(setCurrentUser(user));
        }
    };
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export { App };
