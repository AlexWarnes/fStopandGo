export const TOGGLE_VIS_CREATE_ACCT = 'TOGGLE_VIS_CREATE_ACCT';
export const toggleVisCreateAcct = (isVisible) => ({
  type: TOGGLE_VIS_CREATE_ACCT,
  isVisible
})

export const TOGGLE_VIS_LOGIN = 'TOGGLE_VIS_LOGIN';
export const toggleVisLogin = (isVisible) => ({
  type: TOGGLE_VIS_LOGIN,
  isVisible
})

export const TOGGLE_DEMO = 'TOGGLE_DEMO';
export const toggleDemo = (isLoggedIn) => ({
  type: TOGGLE_DEMO,
  isLoggedIn
})

export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';
export const toggleNavDrawer = (navDrawerIsOpen) => ({
  type: TOGGLE_NAV_DRAWER,
  navDrawerIsOpen
})

export const LOGOUT = 'LOGOUT';
export const logout = (isLoggedIn) => ({
  type: LOGOUT,
  isLoggedIn
})
