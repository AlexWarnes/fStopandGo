import { 
  TOGGLE_MENU,
  toggleMenu,
  TOGGLE_WARNING,
  toggleWarning,
  DISPLAY_VALIDATION_ERROR,
  displayValidationError,
  CLEAR_VALIDATION_ERROR,
  clearValidationError,
  SERVER_ASLEEP,
  serverAsleep,
  SERVER_AWAKE,
  serverAwake,
  SERVER_DOWN,
  serverDown,
  TOGGLE_CONTENT_LOADING,
  toggleContentLoading
} from "./uiActions";

describe('toggleMenu', () => {
  test('Should return the action', () => {
    const action = toggleMenu();
    expect(action.type).toEqual(TOGGLE_MENU);
  });
});

describe('toggleWarning', () => {
  test('Should return the action', () => {
    const action = toggleWarning();
    expect(action.type).toEqual(TOGGLE_WARNING);
  });
});

describe('displayValidationError', () => {
  test('Should return the action', () => {
    const message = 'Incorrect username and password';
    const action = displayValidationError(message);
    expect(action.type).toEqual(DISPLAY_VALIDATION_ERROR);
    expect(action.message).toEqual(message);
  });
});

describe('clearValidationError', () => {
  test('Should return the action', () => {
    const action = clearValidationError();
    expect(action.type).toEqual(CLEAR_VALIDATION_ERROR);
  });
});

describe('serverAsleep', () => {
  test('Should return the action', () => {
    const action = serverAsleep();
    expect(action.type).toEqual(SERVER_ASLEEP);
  });
});

describe('serverAwake', () => {
  test('Should return the action', () => {
    const action = serverAwake();
    expect(action.type).toEqual(SERVER_AWAKE);
  });
});

describe('serverDown', () => {
  test('Should return the action', () => {
    const action = serverDown();
    expect(action.type).toEqual(SERVER_DOWN);
  });
});

describe('toggleContentLoading', () => {
  test('Should return the action', () => {
    const action = toggleContentLoading();
    expect(action.type).toEqual(TOGGLE_CONTENT_LOADING);
  });
});