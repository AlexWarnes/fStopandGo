import shortid from 'shortid';

export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';
export const toggleNavDrawer = (navDrawerIsOpen) => ({
  type: TOGGLE_NAV_DRAWER,
  navDrawerIsOpen
});

export const TOGGLE_WARNING = 'TOGGLE_WARNING';
export const toggleWarning = (warningIsDisplayed) => ({
  type: TOGGLE_WARNING,
  warningIsDisplayed
});

export const LOGIN = 'LOGIN';
export const login = (data) => ({
  type: LOGIN,
  isLoggedIn: true,
  data
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const NEW_SHOOT = 'NEW_SHOOT';
export const newShoot = (newShootInfo) => ({
  type: NEW_SHOOT,
  newShootInfo: {
    id: shortid.generate(),
    gearList: [],
    ...newShootInfo
  }
});

export const UPDATE_SHOOT = 'UPDATE_SHOOT';
export const updateShoot = (data) => ({
  type: UPDATE_SHOOT,
  data
});

export const DELETE_SHOOT = 'DELETE_SHOOT';
export const deleteShoot = (id) => ({
  type: DELETE_SHOOT,
  id
});

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const createAccount = (data) => ({
  type: CREATE_ACCOUNT,
  isLoggedIn: true,
  data
});

export const DEMO_ACCOUNT = 'DEMO_ACCOUNT';
export const demoAccount = () => ({
  type: DEMO_ACCOUNT,
  isLoggedIn: true,
  userName: 'Demo User',
  photoshoots: [{
      id: 'pY5vitWQz',
      title: 'Milky Way Shoot', 
      location: 'Range View Overlook, Shenandoah National Park',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    },{
      id: '2MqnL1Dht',
      title: 'City Night Lights', 
      location: 'Memorial Bridge, Washington, DC',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    }
  ]
});