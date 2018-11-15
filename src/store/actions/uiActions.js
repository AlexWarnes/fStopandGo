
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

export const TOGGLE_ERROR = 'TOGGLE_ERROR';
export const toggleError = (errorIsDisplayed) => ({
  type: TOGGLE_ERROR,
  errorIsDisplayed
})