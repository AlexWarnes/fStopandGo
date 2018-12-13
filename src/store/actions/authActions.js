import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './uiActions';
import { displayValidationError } from '../../store/actions/uiActions';
import { saveAuthToken, clearAuthToken } from '../localStorage';


const { API_BASE_URL } = require('../../config/config');

// export const LOGIN = 'LOGIN';
// export const login = () => ({
//   type: LOGIN
  // isLoggedIn: true,
  // authToken: data.authToken,
  // userID: data.userID
// });

// export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
// export const setAuthToken = (token) => ({
//   type: SET_AUTH_TOKEN,
//   authToken: token.authToken,
//   userID: token.userID
// })


// BREAK
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = userID => ({
    type: AUTH_SUCCESS,
    userID
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});


// BREAK



export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  username: data.username,
  userEmail: data.email
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
  type: RESET_STATE
});

export const logout = () => dispatch => {
  clearAuthToken();
  dispatch(resetState);
}

export const DEMO_LOGIN = 'DEMO_LOGIN';
export const demoLogin = () => ({
  type: DEMO_LOGIN,
  isLoggedIn: true,
  username: 'Demo User'
});

export const getUserInfo = (userID, userJWT) => dispatch => {
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
  }).catch(err => {
    console.log('ERROR');
  });
}

const storeAuthInfo = (authInfo, dispatch) => {
  const JWT = authInfo.authToken;
  const userID = authInfo.userID;
  dispatch(setAuthToken(JWT));
  dispatch(authSuccess(userID));
  saveAuthToken(JWT);
}

export const login = (creds) => dispatch => {
  dispatch(authRequest());
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
    storeAuthInfo(authInfo, dispatch)
  }).catch(err => {
    // TODO: Revisit validation of Redux form
    console.log(JSON.stringify(err));
    dispatch(displayValidationError('Incorrect Username or Password'))
  });
};

export const createNewUser = credentials => dispatch => {
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'content-type':'application/json; charset=UTF-8'
    },
    body: JSON.stringify(credentials)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
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
    console.error(err);
    //dispatch(something())
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
  .then(authInfo => storeAuthInfo(authInfo, dispatch))
  .catch(err => {
    dispatch(authError(err));
    dispatch(clearAuth());
    clearAuthToken();
  });
};