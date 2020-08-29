// POST /users - Create
// POST /users/:userId/time-tracks - Add new track entry for the user
// PUT /users/:userId - Update user information
// GET /users - return list of all users
// GET /time-tracks
import * as apiCallUrls from './apiCallUrls';
import { delay } from './utils';

const getCurrentUser = async () => {
  await delay(300);
  const user = localStorage.getItem('currentUser');

  return user;
}

const login = async (userData) => {
  await delay(300);

  const users = localStorage.getObject('users');

  if (!(userData.email in users) || userData.password !== users[userData.email]) {
    return { error: `User with email: ${userData.email} not found, or wrong password!` };
  }
  localStorage.setItem('currentUser', userData.email);

  return userData;
}

const register = async (userData) => {
  await delay(300);

  const users = localStorage.getObject('users') || {};

  if (userData.email in users) {
    return { error: `Email: ${userData.email} is already in use!` };
  }
  users[userData.email] = userData.password;
  localStorage.setObject('users', users);
  localStorage.setItem('currentUser', userData.email);

  return userData;
}

const logout = async () => {
  await delay(300);

  localStorage.removeItem('currentUser');

  return true;
}

const apiCall = async (opts) => {
  switch (opts.url) {
    case apiCallUrls.CURRENT_USER:
      return await getCurrentUser();

    case apiCallUrls.OAUTH_AUTHENTICATE:
      return await login(opts.data);

    case apiCallUrls.REGISTER:
      return await register(opts.data);

    case apiCallUrls.LOGOUT:
      return await logout();

    default:
      return null;
  }
}

export default apiCall;
