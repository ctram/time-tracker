import React from 'react';
import { LoginForm } from '../components/login-form';

export class PageLogin extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <LoginForm />
            </div>
        );
    }
}
