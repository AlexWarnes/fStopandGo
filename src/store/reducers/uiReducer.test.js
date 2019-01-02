import {
  toggleMenu,
  toggleWarning,
  displayValidationError,
  clearValidationError,
  serverAsleep,
  serverAwake,
  serverDown,
  toggleContentLoading
} from '../actions/uiActions';

import { uiReducer } from './uiReducer';

describe('uiReducer', () => {
  const initialState = {
    menuIsOpen: false,
    scrollIsLocked: false,
    warningIsDisplayed: false,
    errorIsDisplayed: false,
    isValidationError: false,
    validationMessage: null,
    currentView: null,
    serverStatus: 'asleep',
    contentIsLoading: false
  };

  test('Should set the initial state when nothing is passed in', () => {
    const state = uiReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      ...initialState
    });
  });

  test('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = uiReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('toggleMenu', () => {
    test('Should toggle Menu status', () => {
      // open menu
      let state = uiReducer(initialState, toggleMenu());
      expect(state.menuIsOpen).toEqual(!initialState.menuIsOpen);
      expect(state.scrollIsLocked).toEqual(!initialState.scrollIsLocked);
      // close menu
      state = uiReducer(state, toggleMenu());
      expect(state.menuIsOpen).toEqual(initialState.menuIsOpen);
      expect(state.scrollIsLocked).toEqual(initialState.scrollIsLocked);
    });
  });

  describe('toggleWarning', () => {
    test('Should toggle Warning status', () => {
      let state = uiReducer(initialState, toggleWarning());
      expect(state.warningIsDisplayed).toEqual(!initialState.warningIsDisplayed);
      state = uiReducer(state, toggleWarning());
      expect(state.warningIsDisplayed).toEqual(initialState.warningIsDisplayed);
    });
  });

  describe('displayValidationError', () => {
    test('Should toggle Validation Error and message', () => {
      const message = 'Error'
      let state = uiReducer(initialState, displayValidationError(message));
      expect(state.isValidationError).toEqual(!initialState.isValidationError);
      expect(state.validationMessage).toEqual(message);
    });
  });

  describe('clearValidationError', () => {
    test('Should toggle Validation Error and clear message', () => {
      const message = 'Error'
      // display validation error
      let state = uiReducer(initialState, displayValidationError(message));
      expect(state.isValidationError).toEqual(!initialState.isValidationError);
      expect(state.validationMessage).toEqual(message);
      // clear validation error
      state = uiReducer(initialState, clearValidationError());
      expect(state.isValidationError).toEqual(initialState.isValidationError);
      expect(state.validationMessage).toEqual(initialState.validationMessage);
    });
  });

  describe('Server status conditions', () => {
    let state;
    test('Should set server status to awake', () => {
      state = uiReducer(initialState, serverAwake());
      expect(state.serverStatus).toEqual('awake');
    });
    test('Should set server status to down', () => {
      state = uiReducer(state, serverDown());
      expect(state.serverStatus).toEqual('down');
    });
    test('Should set server status to asleep', () => {
      state = uiReducer(state, serverAsleep());
      expect(state.serverStatus).toEqual('asleep');
    });  
  });

  describe('toggleContentLoading', () => {
    test('Should toggle contentIsLoading', () => {
      let state = uiReducer(initialState, toggleContentLoading());
      expect(state.contentIsLoading).toEqual(!initialState.contentIsLoading);
      state = uiReducer(state, toggleContentLoading());
      expect(state.contentIsLoading).toEqual(initialState.contentIsLoading);
    })
  })
});