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
            })
            .catch(err => {
                alert(err);
                console.error(err);
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
