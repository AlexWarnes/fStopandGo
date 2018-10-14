import { LOGIN, LOGOUT, CREATE_ACCOUNT, DEMO_LOGIN} from '../actions/authActions';

const initialState = {
    isLoggedIn: false,
    username: undefined,
    userJWT: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            // console.log(`****${API_BASE_URL}****`)
            return Object.assign({}, state, {
                ...state,
                isLoggedIn:action.isLoggedIn,
                username: action.data.username
            });
        case LOGOUT:
            return Object.assign({}, state, {
                ...initialState
            });
        case CREATE_ACCOUNT:
            console.log("HEY YOU DATA:" + action.data)
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn,
                username: action.data.username
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