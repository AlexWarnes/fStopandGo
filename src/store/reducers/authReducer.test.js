import { authReducer } from './authReducer';
import {
  authSuccess,
  setUserId,
  setAuthToken,
  setUserInfo,
  authError,
  clearAuth,
  demoAcct,
  resetState
} from '../actions/authActions';

describe('authReducer', () => {
  const initialState = {
    isLoggedIn: false,
    error: null,
    username: null,
    userID: null,
    userJWT: null,
    userEmail: null,
    isDemoAccount: false
  };

  //dummy data
  const dummyData = {
    userID: '123456',
    authToken: '1A2B3C4D5E6F',
    error: 'Invalid Credentials',
    userData: {
      username: 'testUser',
      email: 'testUser@email.com'
    }
  }

  test('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      ...initialState
    });
  });

  test('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('authSuccess', () => {
    test('Should set isLoggedIn to true', () => {
      let state = authReducer(initialState, authSuccess());
      expect(state).toEqual({
        ...initialState,
        isLoggedIn: true
      });
    });
  });

  describe('setUserId', () => {
    test('Should save the userID to state', () => {
      let state = authReducer(initialState, setUserId(dummyData.userID));
      expect(state).toEqual({
        ...initialState,
        userID: dummyData.userID
      });
    });
  });

  describe('setAuthToken', () => {
    test('Should save the userJWT to state', () => {
      let state = authReducer(initialState, setAuthToken(dummyData.authToken));
      expect(state).toEqual({
        ...initialState,
        userJWT: dummyData.authToken
      });
    });
  });

  describe('setUserInfo', () => {
    test('Should save the username and userEmail to state', () => {
      let state = authReducer(initialState, setUserInfo(dummyData.userData));
      expect(state).toEqual({
        ...initialState,
        username: dummyData.userData.username,
        userEmail: dummyData.userData.email
      });
    });
  });

  describe('authError', () => {
    test('Should save the error to state', () => {
      let state = authReducer(initialState, authError(dummyData.error));
      expect(state).toEqual({
        ...initialState,
        error: dummyData.error
      });
    });
  });

  describe('clearAuth', () => {
    test('Should reset userJWT, userID, username, userEmail to null in state', () => {
      let state = authReducer(initialState, clearAuth());
      expect(state).toEqual({
        ...initialState,
        userJWT: null,
        userID: null,
        username: null,
        userEmail: null
      });
    });
  });

  describe('demoAcct', () => {
    test('Should set isDemoAcct to true', () => {
      let state = authReducer(initialState, demoAcct());
      expect(state).toEqual({
        ...initialState,
        isDemoAccount: true
      });
    });
  });

  describe('resetState', () => {
    test('Should reset to initial state', () => {
      let state = {
        isLoggedIn: true,
        error: null,
        username: 'testUser',
        userID: '123456',
        userJWT: '1A2B3C4D5E6F',
        userEmail: 'testUser@email.com',
        isDemoAccount: false
      }
      state = authReducer(state, resetState());
      expect(state).toEqual(initialState);
    });
  });
})