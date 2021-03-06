import React from 'react';

import { connect } from 'react-redux';

import { LoginForm } from '../components/login-form';
import { fetchPlus } from '../helpers/fetch-plus';

import { setCurrentUser } from '../actions/session';

import history from '../browser-history';

class PageLoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: null, password: null };

        this.login = this.login.bind(this);
    }

    login({ email, password }) {
        let _this = this;

        fetchPlus('http://localhost:3000/session', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                if (res.status === 401) {
                    throw Error('Incorrect Email or Password');
                }

                return res.json();
            })
            .then(json => {
                console.log(`User: ${json.user}`);
                history.push('/');
                _this.props.loginSuccessful(json.user);
            })
            .catch(err => {
                console.error(err);
                _this.props.loginFailed(err);
            });
    }

    render() {
        console.log(`current user is ${this.props.currentUser}`);

        return (
            <div className="d-flex align-items-center flex-column">
                <h3>Login</h3>
                <LoginForm handleSubmission={this.login} />
            </div>
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

const PageLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLoginComponent);

export { PageLogin };
