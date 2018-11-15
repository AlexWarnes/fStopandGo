import { LOGIN, LOGOUT, DEMO_LOGIN, SET_USER_INFO} from '../actions/authActions';

const initialState = {
    isLoggedIn: false,
    username: null,
    userID: null,
    userJWT: null,
    userEmail: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn:action.isLoggedIn,
                userID: action.userID,
                userJWT: action.authToken
            });
        case LOGOUT:
            return Object.assign({}, state, {
                ...initialState
            });
        case DEMO_LOGIN:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn,
                username: action.username,
            });
        case SET_USER_INFO:
            return Object.assign({}, state, {
                ...state,
                username: action.username,
                userEmail: action.userEmail
            });
        default:
            return state;
    }
}

export default authReducer;