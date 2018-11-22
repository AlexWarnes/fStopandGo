
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

export const normalizeResponseErrors = res => {
  console.log('RUNNING NORMALIZING ERRORS')
  if (!res.ok) {
      if (
          res.headers.has('content-type') &&
          res.headers.get('content-type').startsWith('application/json')
      ) {
        console.log('BLOCK ONE')
          return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
          code: res.status,
          message: res.statusText
      });
  }
  return res;
};

export const DISPLAY_VALIDATION_ERROR = 'DISPLAY_VALIDATION_ERROR';
export const displayValidationError = (message) => ({
  type: DISPLAY_VALIDATION_ERROR,
  message
})

export const CLEAR_VALIDATION_ERROR = 'CLEAR_VALIDATION_ERROR';
export const clearValidationError = () => ({
  type: CLEAR_VALIDATION_ERROR
  
})