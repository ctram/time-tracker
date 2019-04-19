import { applyMiddleware, createStore } from 'redux-starter-kit';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers/index';

export default function configureStore(preloadedState = { currentUser: null }) {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
    }

    return store;
}