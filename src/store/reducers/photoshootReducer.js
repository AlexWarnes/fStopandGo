import { 
  NEW_SHOOT, 
  UPDATE_SHOOT_SUCCESS, 
  DELETE_SHOOT_SUCCESS, 
  SET_PHOTOSHOOTS,
} from "../actions/photoshootActions";

import { 
  RESET_STATE 
} from "../actions/authActions";

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
        case UPDATE_SHOOT_SUCCESS:
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
        case DELETE_SHOOT_SUCCESS:
            const shootsAfterDelete = state.photoshoots.filter(shoot => {
                return shoot.id !== action.shootID;
                });
            return Object.assign({}, state, {
                ...state,
                photoshoots: shootsAfterDelete
            });
        case SET_PHOTOSHOOTS:
            return Object.assign({}, state, {
                ...state,
                photoshoots: action.photoshoots
            })
            case RESET_STATE:
            console.log('TRYING TO RESET PHOTOSHOOT STATE')
              return Object.assign({}, state, {
                ...initialState
              })
        default:
            return state;
    }
}

export default photoshootReducer;