import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './reducers/reducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer
});

export default createStore(rootReducer, applyMiddleware(logger));