import { combineReducers } from 'redux';
import authReducer from './authReducer';
import photoshootReducer from './photoshootReducer';
import uiReducer from './uiReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: authReducer,
    photoshoot: photoshootReducer,
    ui: uiReducer,
    form: formReducer
});

export default rootReducer;