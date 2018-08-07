import { TOGGLE_NAV_DRAWER, LOGIN_LOGOUT, NEW_SHOOT, UPDATE_SHOOT, VIEWING_SHOOT } from '../actions/actions';

const initialState = {
    isLoggedIn: false,
    form_visibility: {photoshoot: false},
    navDrawerIsOpen: false,
    userName: 'Alex',
    photoshoots: [
        {
            id: 'pY5vitWQz',
            title: 'Milky Way Shoot', 
            location: 'Range View Overlook, Shenandoah National Park',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        },
        {
            id: '2MqnL1Dht',
            title: 'City Night Lights', 
            location: 'Memorial Bridge, Washington, DC',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        }
    ]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAV_DRAWER:
            return Object.assign({}, state, {
                ...state,
                navDrawerIsOpen: action.navDrawerIsOpen
            });
        case LOGIN_LOGOUT:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn:action.isLoggedIn
            });
        case NEW_SHOOT:
            return Object.assign({}, state, {
                ...state,
                photoshoots: [...state.photoshoots, action.newShootInfo]
            });
        case UPDATE_SHOOT:
            console.log(action.data);
            const targetIndex = state.photoshoots.map(item => item.id).indexOf(action.data.id);
            return Object.assign({}, state, {
                ...state,
                //am i allowed to do this?
                photoshoots: 
                Object.assign([...state.photoshoots], {[targetIndex]: action.data})
                });
        case VIEWING_SHOOT:
            return Object.assign({}, state, {
                ...state,
                viewingShoot: action.data
            })
        default:
            return state
    }
}