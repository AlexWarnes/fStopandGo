import { toggleContentLoading } from './uiActions';

const { API_BASE_URL } = require('../../config/config');

export const SET_PHOTOSHOOTS = 'SET_PHOTOSHOOTS';
export const setPhotoshoots = (data) => ({
  type: SET_PHOTOSHOOTS,
  photoshoots: data
});

export const NEW_SHOOT = 'NEW_SHOOT';
export const newShoot = (newShootInfo) => ({
  type: NEW_SHOOT,
  newShootInfo: {
    gearList: [],
    ...newShootInfo
  }
});

export const UPDATE_SHOOT_SUCCESS = 'UPDATE_SHOOT_SUCCESS';
export const updateShootSuccess = (data) => ({
  type: UPDATE_SHOOT_SUCCESS,
  data
});

export const DELETE_SHOOT_SUCCESS = 'DELETE_SHOOT_SUCCESS';
export const deleteShootSuccess = (shootID) => ({
  type: DELETE_SHOOT_SUCCESS,
  shootID
});

export const getUserPhotoshoots = (userID, userJWT) => dispatch => {
  return fetch(`${API_BASE_URL}/api/shoots?owner=${userID}`, {
    method: 'GET',
    headers: {
      'Content-Type':'application/json; charset=UTF-8',
      Authorization: `Bearer ${userJWT}`
    }
  }).then(res => {
    if(!res.ok){
      Promise.reject(res.statusText);
    }
    return res.json();
  }).then(data => {
    console.log(data);
    dispatch(setPhotoshoots(data))
  }).catch(err => {
    console.log('ERROR');
    // TODO: dispatch(errorIsDisplayed(true));
  });
};

export const createNewPhotoshoot = (newShootData, userJWT) => dispatch => {
  dispatch(toggleContentLoading());
  return fetch(`${API_BASE_URL}/api/shoots`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${userJWT}`
    },
    body: JSON.stringify(newShootData)
  }).then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(shoot => {
    dispatch(toggleContentLoading());
    dispatch(newShoot(shoot));
  }).catch(err => {
    console.error(err);
    dispatch(toggleContentLoading());
  });
};

export const updatePhotoshoot = (updateData, shootID, userJWT) => dispatch => {
  dispatch(toggleContentLoading());
  console.log('UPDATE DATA: ', JSON.stringify(updateData))
  return fetch(`${API_BASE_URL}/api/shoots/${shootID}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${userJWT}`
    },
    body: JSON.stringify(updateData)
  }).then(res => {
    if(!res.ok){
      Promise.reject(res.statusText);
    }
    return res;
  }).then(() => {
    dispatch(updateShootSuccess(updateData));
    dispatch(toggleContentLoading());
  }).catch(err => {
    console.error(err);
    dispatch(toggleContentLoading());
  });
}

export const deletePhotoshoot = (shootID, userJWT) => dispatch => {
  dispatch(toggleContentLoading());
  return fetch(`${API_BASE_URL}/api/shoots/${shootID}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${userJWT}`
    }
  }).then(res => {
    if(!res.ok){
      Promise.reject(res.statusText);
    }
    return res;
  }).then(() => {
    dispatch(deleteShootSuccess(shootID));
    dispatch(toggleContentLoading());
  }).catch(err => {
    console.error(err);
    dispatch(toggleContentLoading());
  });
}
