import { createReducer } from 'redux-starter-kit';

const trackerReducer = createReducer(
    { isTrackerRunning: false },
    {
        startTracker: (state, action) => {
            state.isTrackerRunning = true;
        },
        stopTracker: state => {
            state.isTrackerRunning = false;
        }
    }
);

export { trackerReducer };
