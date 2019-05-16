import thunkMiddleware from 'redux-thunk';
import { userReducer } from './reducers/user';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
    reducer: { user: userReducer },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

export { store };
