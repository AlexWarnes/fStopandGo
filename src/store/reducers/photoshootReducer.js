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

export const photoshootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_SHOOT:
      return Object.assign({}, state, {
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
        photoshoots: updatedPhotoshoots
      });
    case DELETE_SHOOT_SUCCESS:
      const shootsAfterDelete = state.photoshoots.filter(shoot => {
        return shoot.id !== action.shootID;
      });
      return Object.assign({}, state, {
        photoshoots: shootsAfterDelete
      });
    case SET_PHOTOSHOOTS:
      return Object.assign({}, state, {
        photoshoots: action.photoshoots
      })
    case RESET_STATE:
      return Object.assign({}, state, {
        ...initialState
      })
    default:
      return state;
  }
}

export default photoshootReducer;