import React from 'react';
import { LoginForm } from '../components/login-form';
import history from '../browser-history';

export class PageSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: null, password: null, redirectToLogin: false };

        this.signUp = this.signUp.bind(this);
    }

    signUp({ email, password }) {
        let status = null;

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ email: email, password: password })
        }).then(res => {
            status = res.status;

            return res.json()
        }).then(json => {
            if (status === 201) {
                alert(`User created ${json.user}`);
                return history.push('/login');
            }

            return Promise.reject(json.error.message || json.error.type);
        }).catch(err => {
            alert(`There was an error signing up: ${err}`);
        })
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
