import { createAction } from 'redux-starter-kit';

const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const LOGIN_FAILED = 'LOGIN_FAILED';

const loginSuccessful = createAction(LOGIN_SUCCESSFUL);
const loginFailed = createAction(LOGIN_FAILED);

export { loginSuccessful, loginFailed };
