import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/session';
import history from '../browser-history';
import { fetchPlus } from '../helpers/fetch-plus';

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
                        {!currentUser && (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        )}
                        {!currentUser && (
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        )}
                        {currentUser && (
                            <li className="nav-item" onClick={this.props.logOut}>
                                <Link to="/sign-out" className="nav-link">
                                    Sign Out
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {currentUser && <div className="current-user">{currentUser.email}</div>}
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        logOut: () => {
            fetchPlus('http://localhost:3000/session/logout', {
                method: 'GET',
            })
                .then(res => {
                    if (res.status === 200) {
                        dispatch(logOut());
                        history.push('/');
                        return console.log('Successful logged out.')
                    }

                    throw Error(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };
};

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);

export { Navbar };
