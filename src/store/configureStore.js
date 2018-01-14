import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

export default function configureStore(initialState) {
    const logger = createLogger();
    const enhancer = compose(
        applyMiddleware(thunk, logger)
    );
    return createStore(reducers, initialState, enhancer);
}
