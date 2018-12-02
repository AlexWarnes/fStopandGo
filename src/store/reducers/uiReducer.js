import { TOGGLE_MENU, TOGGLE_WARNING, TOGGLE_ERROR, DISPLAY_VALIDATION_ERROR, CLEAR_VALIDATION_ERROR } from "../actions/uiActions";

const initialState = {
    menuIsOpen: false,
    warningIsDisplayed: false,
    errorIsDisplayed: false,
    isValidationError: false,
    validationMessage: null
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return Object.assign({}, state, {
                ...state,
                menuIsOpen: !state.menuIsOpen
            });
        case TOGGLE_WARNING:
            return Object.assign({}, state, {
                ...state,
                warningIsDisplayed: !state.warningIsDisplayed
            });
        case TOGGLE_ERROR:
            return Object.assign({}, state, {
                ...state,
                errorIsDisplayed: action.errorIsDisplayed
            });
        case DISPLAY_VALIDATION_ERROR:
            return Object.assign({}, state, {
                ...state,
                isValidationError: true,
                validationMessage: action.message        
            });
        case CLEAR_VALIDATION_ERROR:
            return Object.assign({}, state, {
                ...state,
                isValidationError: false,
                validationMessage: null
            });
        default:
            return state;
    }
}

export default uiReducer;