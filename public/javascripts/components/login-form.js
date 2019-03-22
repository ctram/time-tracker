import React from 'react';
import URLS from '../constants/urls';

export class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loginError: false };

        this.login = this.login.bind(this);
    }

    login() {
        const { email, password } = this.state;

        const request = new Request()


        fetch(URLS.)
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        required
                    />
                </div>
                <button onClick={this.login} type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}
