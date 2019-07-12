import React from 'react';
import { connect } from 'react-redux';
import { fetchPlus } from '../helpers/fetch-plus';


export class TrackerComponent extends React.Component {

    constructor(props) {
        super(props)
        this.trackerInput = React.createRef();

        this.startTracker = this.startTracker.bind(this);
    }

    startTracker() {
        const { currentUser } = this.props;

        if (!this.trackerInput.current.value) {
            return console.log('Tracker would start, but there is no title for the tracker, so not starting.')
        }

        console.log(this.trackerInput.current.value)

        fetchPlus('http://localhost:3000/time-entries', {
            method: 'POST',
            body: JSON.stringify({ title: this.trackerInput.current.value, userId: currentUser.id })
        })
            .then(res => {

            })
            .catch(e => {
                console.error(e);
            })

    }

    render() {
        return (
            <div className="tracker d-flex align-items-center w-50">
                <input className="form-control form-control-lg mr-3" ref={this.trackerInput} />
                <i className="fas fa-play" onClick={this.startTracker} />
            </div>
        );
    }
}

// TODO: add state for whether you are currently tracking an entry

const mapStateToProps = state => {
    return {
        isTrackerRunning: state.trackers.isTrackerRunning,
        currentUser: state.users.currentUser
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        // startTracking: () => {}
    };
};

const Tracker = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackerComponent);

export { Tracker };
