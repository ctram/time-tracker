import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export class Tracker extends React.Component {
    render() {
        return (
            <div className="tracker d-flex align-items-center w-50">
                <input className="form-control form-control-lg mr-3"/>
                <i class="fas fa-play" />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.users.currentUser
//     };
// };

// const Navbar = connect(mapStateToProps)(NavbarComponent);

// export { Navbar };
