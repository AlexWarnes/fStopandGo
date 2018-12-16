import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors, displayValidationError, getServerStatus, toggleContentLoading } from './uiActions';
import { getUserPhotoshoots } from './photoshootActions';
import { saveAuthToken, clearAuthToken } from '../localStorage';

const { API_BASE_URL } = require('../../config/config');

const storeAuthInfo = (authInfo, dispatch) => {
  const JWT = authInfo.authToken;
  const userID = authInfo.userID;
  dispatch(authSuccess());
  dispatch(setAuthToken(JWT));
  dispatch(setUserId(userID));
  saveAuthToken(JWT);
}

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = () => ({
    type: AUTH_SUCCESS,
});

export const SET_USER_ID = 'SET_USER_ID';
export const setUserId = userID => ({
    type: SET_USER_ID,
    userID
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  username: data.username,
  userEmail: data.email
});

export const DEMO_LOGIN = 'DEMO_LOGIN';
export const demoLogin = () => ({
  type: DEMO_LOGIN,
  isLoggedIn: true,
  username: 'Demo User'
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
  type: RESET_STATE
});

export const getUserInfo = (userID, userJWT) => dispatch => {
  dispatch(toggleContentLoading());
  fetch(`${API_BASE_URL}/api/users/${userID}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${userJWT}`
    }
  }).then(res => {
    if(!res.ok) {
      Promise.reject(res.statusText)
    }
    return res.json();
  }).then(data => {
    console.log(data)
    dispatch(setUserInfo(data));
    dispatch(toggleContentLoading());
  }).catch(err => {
    console.log('ERROR', JSON.stringify(err));
    dispatch(toggleContentLoading());
  });
}

export const login = (creds) => dispatch => {
  dispatch(authRequest());
  dispatch(toggleContentLoading());
  fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(creds)
  }).then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(authInfo => {
    storeAuthInfo(authInfo, dispatch);
    dispatch(getUserInfo(authInfo.userID, authInfo.authToken));
    dispatch(getUserPhotoshoots(authInfo.userID, authInfo.authToken));
    dispatch(getServerStatus());
    dispatch(toggleContentLoading());
  }).catch(err => {
    // TODO: Revisit validation of Redux form
    console.log(JSON.stringify(err));
    dispatch(displayValidationError('Incorrect Username or Password'))
    dispatch(getServerStatus());
    dispatch(toggleContentLoading());
  });
};

export const createNewUser = credentials => dispatch => {
  dispatch(toggleContentLoading());
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'content-type':'application/json; charset=UTF-8'
    },
    body: JSON.stringify(credentials)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => {
    res.json();
    dispatch(getServerStatus());
    dispatch(toggleContentLoading());
  })
  .catch(err => {
    dispatch(getServerStatus());
    dispatch(toggleContentLoading());
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
    // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message
        })
      );
    }
  });
};

export const deleteUser = (userID, userJWT) => dispatch => {
  dispatch(toggleContentLoading());
  fetch(`${API_BASE_URL}/api/users/${userID}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${userJWT}`
    }
  }).then(res=>{
    if(!res.ok){
      Promise.reject(res.statusText);
    }
    return res;
  }).then(()=>{
    console.log(`DELETED: ${userID}`);
    dispatch(logout());
  }).catch(err=>{
    console.log(JSON.stringify(err));
    dispatch(getServerStatus());
    dispatch(toggleContentLoading());
  });
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.userJWT;
  console.log('HERE IS OUR AUTH TOKEN: ', authToken)
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => {
    return normalizeResponseErrors(res)
  })
  .then(res =>{ 
    return res.json();
  })
  .then(authInfo => {
    storeAuthInfo(authInfo, dispatch);
    dispatch(getUserInfo(authInfo.userID, authInfo.authToken));
    dispatch(getUserPhotoshoots(authInfo.userID, authInfo.authToken));
    dispatch(getServerStatus());
  })
  .catch(err => {
    dispatch(authError(err));
    dispatch(clearAuth());
    dispatch(getServerStatus());
    clearAuthToken();
  });
};

export const logout = () => dispatch => {
  clearAuthToken();
  dispatch(resetState());
  dispatch(getServerStatus());
}