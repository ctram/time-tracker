import React from 'react';
import { connect } from 'react-redux';

export class TrackerComponent extends React.Component {
    render() {
        return (
            <div className="tracker d-flex align-items-center w-50">
                <input className="form-control form-control-lg mr-3" />
                <i className="fas fa-play" onClick={this.props.startTracking} /> //
            </div>
        );
    }
}

// TODO: add state for whether you are currently tracking an entry

const mapStateToProps = state => {
    return {
        isTrackerRunning: state.trackers.isTrackerRunning
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startTracking: () => {}
    };
};

const Tracker = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackerComponent);

export { Tracker };
