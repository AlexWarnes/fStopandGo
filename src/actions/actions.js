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
