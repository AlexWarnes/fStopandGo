import shortid from 'shortid';

export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';
export const toggleNavDrawer = (navDrawerIsOpen) => ({
  type: TOGGLE_NAV_DRAWER,
  navDrawerIsOpen
})

export const LOGIN_LOGOUT = 'LOGIN_LOGOUT';
export const toggleLogin = (isLoggedIn) => ({
  type: LOGIN_LOGOUT,
  isLoggedIn
})

export const NEW_SHOOT = 'NEW_SHOOT';
export const newShoot = (newShootInfo) => ({
  type: NEW_SHOOT,
  newShootInfo: {
    id: shortid.generate(),
    ...newShootInfo
  }
})

export const UPDATE_SHOOT = 'UPDATE_SHOOT';
export const updateShoot = (data) => ({
  type: UPDATE_SHOOT,
  data
})

export const VIEWING_SHOOT = 'VIEWING_SHOOT';
export const viewingShoot = (data) => ({
  type: VIEWING_SHOOT,
  data
})