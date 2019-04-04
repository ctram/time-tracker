import React from 'react';
import { LoginForm } from '../components/login-form';
import { urls } from '../constants/urls';

export class PageSignUp extends React.Component {

    constructor(props) {
        super(props);

        this.signUp = this.signUp.bind(this);
    }

    signUp({ email, password }) {
        debugger;
        fetch(urls.users, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center pt-5 align-items-center">
                <h4>Sign Up</h4>
                <LoginForm handleSubmission={this.signUp} />
            </div>
        );
    }
}
