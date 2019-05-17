import { createAction } from 'redux-starter-kit';

const SET_CURRENT_USER = 'SET_CURRENT_USER';

const setCurrentUser = createAction(SET_CURRENT_USER);

export { setCurrentUser };
