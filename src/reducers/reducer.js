import { TOGGLE_VIS_CREATE_ACCT, TOGGLE_VIS_LOGIN, TOGGLE_DEMO, TOGGLE_NAV_DRAWER, LOGOUT } from '../actions/actions';

const initialState = {
    isLoggedIn: false,
    form_visibility: {createAcct: false, login: false, photoshoot: false},
    navDrawerIsOpen: false,
    userName: 'Alex',
    photoshoots: [
        {
            title: 'Milky Way Shoot', 
            location: 'Range View Overlook, Shenandoah National Park',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        },
        {
            title: 'City Night Lights', 
            location: 'Memorial Bridge, Washington, DC',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
            gearList: ['tripod', 'camera', 'lantern', 'batteries']
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VIS_CREATE_ACCT:
            return Object.assign({}, state, {
                ...state,
                form_visibility: {...state.form_visibility, createAcct: action.isVisible}
            })
        case TOGGLE_VIS_LOGIN:
            return Object.assign({}, state, {
                ...state,
                form_visibility: {...state.form_visibility, login: action.isVisible}
            });
        case TOGGLE_DEMO:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn
            });
        case TOGGLE_NAV_DRAWER:
            return Object.assign({}, state, {
                ...state,
                navDrawerIsOpen: action.navDrawerIsOpen
            });
        case LOGOUT:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: action.isLoggedIn
            });
        default:
            return state
    }
}
