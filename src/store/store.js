import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { loadAuthToken } from './localStorage'
import { setAuthToken, refreshAuthToken } from './actions/authActions';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;