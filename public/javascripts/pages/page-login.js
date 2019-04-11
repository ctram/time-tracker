import React from 'react';
import { LoginForm } from '../components/login-form';
import { fetchPlus } from '../helpers/fetch-plus';

export class PageLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: null, password: null };

        this.login = this.login.bind(this);
    }

    login({ email, password }) {
        fetchPlus('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        }).then(res => {
            // TODO: here
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
