import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  SET_AUTH_TOKEN,
  SET_USER_INFO,
  AUTH_ERROR,
  CLEAR_AUTH,
  DEMO_LOGIN,
  RESET_STATE
} from '../actions/authActions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  username: null,
  userID: null,
  userJWT: null,
  userEmail: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        error: null
    });
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false,
        userID: action.userID,
    });
    case SET_AUTH_TOKEN:
      return Object.assign({}, state, {
        userJWT: action.authToken
    });
    case SET_USER_INFO:
      return Object.assign({}, state, {
        username: action.username,
        userEmail: action.userEmail
    });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
    })
    case CLEAR_AUTH:
      return Object.assign({}, state, {
        userJWT: null,
        userID: null,
        username: null,
        userEmail: null
    });
    // TODO: logout should be handled in Actions and dispatch CLEAR AUTH and clear localStorage
    case RESET_STATE:
      return Object.assign({}, state, {
        ...initialState
    });
    case DEMO_LOGIN:
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: action.isLoggedIn,
        username: action.username,
    }); 
    default:
      return state;
  }
}

export default authReducer;