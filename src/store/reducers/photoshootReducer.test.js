import { photoshootReducer } from './photoshootReducer';

import {
  newShoot,
  updateShootSuccess,
  deleteShootSuccess,
  setPhotoshoots
} from '../actions/photoshootActions';

describe('photoshootReducer', () => {
  const initialState = {
    photoshoots: []
  }

  //dummy data
  const dummyData = [
    {
      id: '123',
      title: 'Milky Way Shoot',
      location: 'Skyline Drive',
      description: 'Testing One',
      gearList: ['tripod','lens']
    },
    {
      id: '456',
      title: 'Portrait Shoot',
      location: 'The City',
      description: 'Testing Two',
      gearList: ['camera','flash'] 
    }
  ]

  test('Should set the initial state when nothing is passed in', () => {
    const state = photoshootReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      ...initialState
    });
  });

  test('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = photoshootReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('newShoot', () => {
    test('Should add newShoot to state', () => {
      let state = photoshootReducer(initialState, newShoot(dummyData[0]));
      expect(state.photoshoots[0]).toEqual(dummyData[0]);
      state = photoshootReducer(state, newShoot(dummyData[1]));
      expect(state.photoshoots).toEqual(dummyData);
    })
  })

  describe('updateNewShootSuccess', () => {
    test('Should update the shoot in state', () => {
      let state;
      const updatedShoot = {
        id: '123',
        title: 'Andromeda Shoot',
        location: 'Iceland',
        description: 'Testing One',
        gearList: ['tripod','lens', 'intervalometer']
      }
      state = photoshootReducer(initialState, newShoot(dummyData[0]));
      expect(state.photoshoots[0]).toEqual(dummyData[0]);
      state = photoshootReducer(state, updateShootSuccess(updatedShoot));
      expect(state.photoshoots[0]).toEqual(updatedShoot);
    })
  })

  describe('deleteShootSuccess', () => {
    test('Should remove the correct shoot from state', () => {
      const shootToDelete = '123'
      // Add first shoot
      let state = photoshootReducer(initialState, newShoot(dummyData[0]));
      expect(state.photoshoots[0]).toEqual(dummyData[0]);
      // Add second shoot
      state = photoshootReducer(state, newShoot(dummyData[1]));
      expect(state.photoshoots).toEqual(dummyData);
      // Delete first shoot
      state = photoshootReducer(state, deleteShootSuccess(shootToDelete));
      expect(state.photoshoots[0]).toEqual(dummyData[1]);
    })
  });

  describe('setPhotoshoots', () => {
    test('Should set photoshoots to state', () => {
      let state = photoshootReducer(initialState, setPhotoshoots(dummyData));
      expect(state.photoshoots).toEqual(dummyData);
    })
  })
})

