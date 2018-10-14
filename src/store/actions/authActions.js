const { API_BASE_URL } = require('../../config/config');

export const LOGIN = 'LOGIN';
export const login = (data) => ({
  type: LOGIN,
  isLoggedIn: true,
  data
});

// export const testLogin = () => dispatch => {
//   dispatch(fetchToken());
//   fetch(`${API_BASE_URL}/`).then(res => {
//       if (!res.ok) {
//           return Promise.reject(res.statusText);
//       }
//       return res.json();
//   }).then(board => {
//       dispatch(fetchBoardSuccess(board));
//   }).catch(err => {
//       dispatch(fetchBoardError(err));
//   });
// };

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const createAccount = (data) => ({
  type: CREATE_ACCOUNT,
  isLoggedIn: true,
  data
});

export const DEMO_LOGIN = 'DEMO_LOGIN';
export const demoLogin = () => ({
  type: DEMO_LOGIN,
  isLoggedIn: true,
  username: 'Demo User'
});