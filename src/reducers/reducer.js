import { 
    TOGGLE_NAV_DRAWER,
    TOGGLE_WARNING,
    LOGIN,
    LOGOUT,
    NEW_SHOOT, 
    UPDATE_SHOOT,
    DELETE_SHOOT, 
    CREATE_ACCOUNT,
    DEMO_ACCOUNT 
} from '../actions/actions';

const {API_BASE_URL} = require('../config');

const initialState = {
    isLoggedIn: false,
    navDrawerIsOpen: false,
    warningIsDisplayed: false,
    userName: undefined,
    userJWT: undefined,
    photoshoots: []
}

export const appReducer = (state = initialState, action) => {
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
            })
        case LOGIN:
            console.log(`****${API_BASE_URL}****`)
            return Object.assign({}, state, {
                ...state,
                isLoggedIn:action.isLoggedIn,
                userName: action.data.userName
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
                userName: action.data.userName
            })
        case DEMO_ACCOUNT:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn,
                userName: action.userName,
                photoshoots: action.photoshoots
            })
        case NEW_SHOOT:
            return Object.assign({}, state, {
                ...state,
                photoshoots: [...state.photoshoots, action.newShootInfo]
            });
        case UPDATE_SHOOT:
            const updatedPhotoshoots = state.photoshoots.map(shoot => {
                if (shoot.id !== action.data.id) {
                    return shoot;
                }
                return {
                    id: shoot.id, 
                    title: action.data.title, 
                    location: action.data.location,
                    description: action.data.description,
                    gearList: action.data.gearList,
                }
            });
            return Object.assign({}, state, {
                ...state,
                photoshoots: updatedPhotoshoots
            });
        case DELETE_SHOOT:
            const shootsAfterDelete = state.photoshoots.filter(shoot => {
                return shoot.id !== action.id;
                });
            return Object.assign({}, state, {
                ...state,
                photoshoots: shootsAfterDelete
            })
        default:
            return state
    }
}