import { createReducer } from 'redux-starter-kit';

const usersReducer = createReducer(
    { currentUser: null },
    {
        SET_CURRENT_USER: (state, action) => {
            state.currentUser = action.payload;
        }
    }
);

export { usersReducer };
