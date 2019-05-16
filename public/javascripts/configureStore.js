import thunkMiddleware from 'redux-thunk';
import { usersReducer } from './reducers/users';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
    reducer: { users: usersReducer },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

export { store };
