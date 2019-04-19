import React from 'react';

import { LoginForm } from '../components/login-form';
import { fetchPlus } from '../helpers/fetch-plus';

import { loginFailed, loginSuccessful } from '../actions/login';

import store from '../configureStore';
const { dispatch } = store;

export class PageLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: null, password: null };

        this.login = this.login.bind(this);
    }

    login({ email, password }) {
        store.dispatch(requestLogin(email, password));

        fetchPlus('http://localhost:3000/login', {
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
                alert('Successfully logged in.');
                console.log(`User: ${json.user}`);
                dispatch(loginSuccessful(json.user));
            })
            .catch(err => {
                alert(err);
                console.error(err);
                dispatch(loginFailed(err));
            });
    }

    render() {
        return (
            <div className="d-flex align-items-center flex-column">
                <h3>Login</h3>
                <LoginForm handleSubmission={this.login} />
            </div>
        );
    }
}
