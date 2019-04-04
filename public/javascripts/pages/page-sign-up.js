import React from 'react';
import { LoginForm } from '../components/login-form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageLogin } from './page-login';

import { urls } from '../constants/urls';

export class PageSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: null, password: null, redirectToLogin: false };

        this.signUp = this.signUp.bind(this);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }

    redirectToLogin() {
        console.log('redirectologin called');
        this.context.history.push('/login');

        // TODO: refer to this to figure out how to redirect https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4

        // <Router>
        //     <Route path="/login" component={PageLogin} />
        // </Router>;
    }

    signUp({ email, password }) {
        const _this = this;

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email: email, password: password })
        }).then(res => {
            if (res.status === 201) {
                _this.redirectToLogin();
            }
        });
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <h3>Sign Up</h3>
                <LoginForm handleSubmission={this.signUp} />
            </div>
        );
    }
}
