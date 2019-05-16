import { createReducer } from 'redux-starter-kit';

const usersReducer = createReducer(
    { currentUser: null },
    {
        setCurrentUser: (state, action) => {
            state.currentUser = action.currentUser;
        }
    }
);

export { usersReducer };
