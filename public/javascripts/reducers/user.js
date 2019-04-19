import { createReducer } from 'redux-starter-kit';

const userReducer = createReducer(
    { currentUser: null },
    {
        setCurrentUser: (state, action) => {
            state.currentUser = action.currentUser;
        }
    }
);

export { userReducer };
