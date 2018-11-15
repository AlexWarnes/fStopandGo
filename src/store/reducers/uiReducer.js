import { TOGGLE_NAV_DRAWER, TOGGLE_WARNING, TOGGLE_ERROR } from "../actions/uiActions";

const initialState = {
    navDrawerIsOpen: false,
    warningIsDisplayed: false,
    errorIsDisplayed: false
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAV_DRAWER:
            return Object.assign({}, state, {
                ...state,
                navDrawerIsOpen: action.navDrawerIsOpen
            });
        case TOGGLE_WARNING:
            return Object.assign({}, state, {
                ...state,
                warningIsDisplayed: action.warningIsDisplayed
            });
        case TOGGLE_ERROR:
            return Object.assign({}, state, {
                ...state,
                errorIsDisplayed: action.errorIsDisplayed
            });
        default:
            return state;
    }
}

export default uiReducer;