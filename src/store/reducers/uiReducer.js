import { 
  TOGGLE_MENU,
  TOGGLE_WARNING,
  TOGGLE_ERROR,
  DISPLAY_VALIDATION_ERROR,
  CLEAR_VALIDATION_ERROR,
  CURRENT_VIEW, 
  SERVER_ASLEEP,
  SERVER_AWAKE,
  SERVER_DOWN,
  TOGGLE_CONTENT_LOADING
} from "../actions/uiActions";

import { 
  RESET_STATE 
} from "../actions/authActions";

const initialState = {
  menuIsOpen: false,
  scrollIsLocked: false,
  warningIsDisplayed: false,
  errorIsDisplayed: false,
  isValidationError: false,
  validationMessage: null,
  currentView: null,
  serverStatus: 'asleep',
  contentIsLoading: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        menuIsOpen: !state.menuIsOpen,
        scrollIsLocked: !state.menuIsOpen
      });
    case TOGGLE_WARNING:
      return Object.assign({}, state, {
        warningIsDisplayed: !state.warningIsDisplayed
      });
    case TOGGLE_ERROR:
      return Object.assign({}, state, {
        errorIsDisplayed: action.errorIsDisplayed
      });
    case DISPLAY_VALIDATION_ERROR:
      return Object.assign({}, state, {
        isValidationError: true,
        validationMessage: action.message        
      });
    case CLEAR_VALIDATION_ERROR:
      return Object.assign({}, state, {
        isValidationError: false,
        validationMessage: null
      });
    case CURRENT_VIEW:
      return Object.assign({}, state, {
        currentView: action.currentView
      });
    case SERVER_ASLEEP:
      return Object.assign({}, state, {
        serverStatus: 'asleep'
      });
    case SERVER_AWAKE:
      return Object.assign({}, state, {
        serverStatus: 'awake'
      });
    case SERVER_DOWN:
      return Object.assign({}, state, {
        serverStatus: 'down'
      });
    case TOGGLE_CONTENT_LOADING:
      return Object.assign({}, state, {
        contentIsLoading: !state.contentIsLoading
      });
    case RESET_STATE:
      return Object.assign({}, state, {
        ...initialState
      });
    default:
      return state;
  }
}

export default uiReducer;