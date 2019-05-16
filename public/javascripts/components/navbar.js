import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class NavbarComponent extends React.Component {
    render() {
        let { currentUser } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Time Tracker
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>

                {currentUser && <div className="current-user">{currentUser.firstName}</div>}
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser
    };
};

const Navbar = connect(mapStateToProps)(NavbarComponent);

export { Navbar };
