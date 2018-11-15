// import shortid from 'shortid';
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
    // id: shortid.generate(),
    gearList: [],
    ...newShootInfo
  }
});

export const UPDATE_SHOOT = 'UPDATE_SHOOT';
export const updateShoot = (data) => ({
  type: UPDATE_SHOOT,
  data
});

export const DELETE_SHOOT_SUCCESS = 'DELETE_SHOOT_SUCCESS';
export const deleteShootSuccess = (shootID) => ({
  type: DELETE_SHOOT_SUCCESS,
  shootID
});

export const getUserPhotoshoots = (userID, userJWT) => dispatch => {
  fetch(`${API_BASE_URL}/api/shoots?owner=${userID}`, {
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
  });
};

export const createNewPhotoshoot = (newShootData, userJWT) => dispatch => {
  fetch(`${API_BASE_URL}/api/shoots`, {
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
    dispatch(newShoot(shoot));
  }).catch(err => {
    console.error(err);
    //dispatch(newShootFailure());
  });
};

export const updatePhotoshoot = (updateData, shootID, userJWT) => dispatch => {
  fetch(`${API_BASE_URL}/api/shoots/${shootID}`, {
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
  }).then(shoot => {
    dispatch(updateShoot(shoot));
  }).catch(err => {
    console.error(err);
    //dispatch(updateShootFailure());
  });
}

export const deletePhotoshoot = (shootID, userJWT) => dispatch => {
  fetch(`${API_BASE_URL}/api/shoots/${shootID}`, {
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
  }).then((shootID) => {
    dispatch(deleteShootSuccess(shootID))
  }).catch(err => {
    console.error(err);
    //dispatch(deleteShootFailure())
  });
}

export const DEMO_DATA = 'DEMO_DATA';
export const demoData = () => ({
  type: DEMO_DATA,
  photoshoots: [{
      id: 'pY5vitWQz',
      title: 'Milky Way Shoot', 
      location: {
        name: 'Range View Overlook, Shenandoah National Park',
        lat: 38.7643271,
        lng: -78.2256057
      },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam quae optio recusandae molestias alias?',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    },{
      id: '2MqnL1Dht',
      title: 'City Night Lights', 
      location: {
        name: 'Memorial Bridge, Washington, DC',
        lat: 38.8874085,
        lng: -77.0574026
      },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit consequatur error, cupiditate voluptas architecto autem ratione, voluptatibus quibusdam enim dolorem iure ea minus est.',
      gearList: ['tripod', 'camera', 'lantern', 'batteries']
    }
  ]
});