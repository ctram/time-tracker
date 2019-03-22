import React from 'react';
import { LoginForm } from '../components/login-form';

export class PageLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: null, password: null };
    }

    login() {

    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <LoginForm />
            </div>
        );
    }
}
