import {
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  SET_USER_ID,
  setUserId,
  SET_AUTH_TOKEN,
  setAuthToken,
  SET_USER_INFO,
  setUserInfo,
  AUTH_ERROR,
  authError,
  CLEAR_AUTH,
  clearAuth,
  DEMO_ACCT,
  demoAcct,
  RESET_STATE,
  resetState
} from './authActions';

describe('authRequest', () => {
  test('Should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe('authSuccess', () => {
  test('Should return the action', () => {
    const action = authSuccess();
    expect(action.type).toEqual(AUTH_SUCCESS);
  });
});

describe('setUserId', () => {
  test('Should return the action', () => {
    const userID = '123456';
    const action = setUserId(userID);
    expect(action.type).toEqual(SET_USER_ID);
    expect(action.userID).toEqual(userID);
  });
});

describe('setAuthToken', () => {
  test('Should return the action', () => {
    const authToken = '123456';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('setUserInfo', () => {
  test('Should return the action', () => {
    const data = {
      username: 'testUser',
      email: 'testUser@email.com'
    }
    const action = setUserInfo(data);
    expect(action.type).toEqual(SET_USER_INFO);
    expect(action.username).toEqual(data.username);
    expect(action.userEmail).toEqual(data.email);
  });
});

describe('authError', () => {
  test('Should return the action', () => {
    const error = 'Invalid Credentials';
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('clearAuth', () => {
  test('Should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe('demoAcct', () => {
  test('Should return the action', () => {
    const action = demoAcct();
    expect(action.type).toEqual(DEMO_ACCT);
  });
});

describe('resetState', () => {
  test('Should return the action', () => {
    const action = resetState();
    expect(action.type).toEqual(RESET_STATE);
  });
});