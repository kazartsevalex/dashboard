// POST /oauth/authenticate - Login
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

const login = async () => {
  await delay(300);
}

const apiCall = async (url) => {
  switch (url) {
    case apiCallUrls.CURRENT_USER:
      return await getCurrentUser();

    case apiCallUrls.OAUTH_AUTHENTICATE:
      return await login();

    default:
      return null;
  }
}

export default apiCall;
