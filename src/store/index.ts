import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import rootReducer from '../reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

export default function configStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}
