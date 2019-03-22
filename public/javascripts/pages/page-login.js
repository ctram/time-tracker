import React from 'react';
import { LoginForm } from '../components/login-form';
import { urls } from '../constants/urls';

export class PageLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: null, password: null };
    }

    login({ email, password }) {
        fetch('http://localhost:3000/hoo', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        }).then(res => {
            debugger;
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <LoginForm handleLogin={this.login} />
            </div>
        );
    }
}
