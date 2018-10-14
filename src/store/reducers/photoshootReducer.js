import { NEW_SHOOT, UPDATE_SHOOT, DELETE_SHOOT, DEMO_DATA } from "../actions/photoshootActions";

//TODO: Temporary. Delete this import when DB is connected
import { LOGOUT } from "../actions/authActions";

const initialState = {
    photoshoots: []
};

const photoshootReducer = (state = initialState, action) => {
    switch (action.type) {
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
            });
        case DEMO_DATA:
            return Object.assign({}, state, {
                ...state,
                photoshoots: action.photoshoots
            });
        case LOGOUT:
            return Object.assign({}, state, {
                ...initialState
            });
        default:
            return state;
    }
}

export default photoshootReducer;