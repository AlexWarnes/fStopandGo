import {SubmissionError} from 'redux-form';
import { normalizeResponseErrors } from './uiActions';

const { API_BASE_URL } = require('../../config/config');

export const LOGIN = 'LOGIN';
export const login = (data) => ({
  type: LOGIN,
  isLoggedIn: true,
  authToken: data.authToken,
  userID: data.userID
});

export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  username: data.username,
  userEmail: data.email
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

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

export const getToken = (creds) => dispatch => {
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
  }).then(data => {
      dispatch(login(data));
  }).catch(err => {
      console.log('ERROR!');
      // dispatch(toggleError(true))
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
  .then(res => {
    // if(!res.ok){
    //   Promise.reject(res.statusText);
    // }
    return res.json();
  }).catch(err => {
    console.log(JSON.stringify(err));
    //dispatch(something());
    const {reason, message, location} = err;
    console.log('CATCH BLOCK')
    console.log(location, message, reason)
    if (reason === 'ValidationError') {
      console.log(`${location}: ${message}`, reason)
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