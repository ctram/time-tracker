import { createAction } from 'redux-starter-kit';

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOG_OUT = 'LOG_OUT';

const setCurrentUser = createAction(SET_CURRENT_USER);
const logOut = createAction(LOG_OUT);

export { setCurrentUser, logOut };
