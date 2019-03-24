import React from 'react';
import { LoginForm } from '../components/login-form';
import { urls } from '../constants/urls';

export class PageSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: null, password: null };
    }

    signUp({ email, password }) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email: email, password: password })
        }).then(res => {
            debugger;
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
