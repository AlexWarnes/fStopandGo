import { TOGGLE_NAV_DRAWER, LOGIN_LOGOUT } from '../actions/actions';

const initialState = {
    isLoggedIn: false,
    form_visibility: {photoshoot: false},
    navDrawerIsOpen: false,
    userName: 'Alex',
    photoshoots: [
        {
            id: '1',
            title: 'Milky Way Shoot', 
            location: 'Range View Overlook, Shenandoah National Park',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        },
        {
            id: '2',
            title: 'City Night Lights', 
            location: 'Memorial Bridge, Washington, DC',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        }
    ]
}

export default (state = initialState, action) => {
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
            })
        default:
            return state
    }
}
