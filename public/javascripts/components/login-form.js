import React from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.form = React.createRef();

        this.state = {
            loginError: false,
            isValid: false,
            submittedOnce: false,
            email: '',
            password: ''
        };

        this.login = this.login.bind(this);
    }

    login() {
        const { email, password } = this.state;

        this.setState({ submittedOnce: true }, () => {
            if (this.form.current.checkValidity()) {
                this.props.handleSubmission({ email, password });
            }
        });
    }

    render() {
        const { submittedOnce } = this.state;

        const formClass = submittedOnce ? 'was-validated' : '';

        return (
            <form className={formClass} id="my-form" ref={this.form}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        autocomplete="sample@example.com"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={e => {
                            this.setState({ email: e.target.value });
                        }}
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
                        onChange={e => {
                            this.setState({ password: e.target.value });
                        }}
                        required
                    />
                </div>
                <button onClick={this.login} type="button" className="btn btn-primary">
                    Submit
                </button>
            </form>
        );
    }
}
