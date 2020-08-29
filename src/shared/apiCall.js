// POST /users - Create
// POST /users/:userId/time-tracks - Add new track entry for the user
// PUT /users/:userId - Update user information
// GET /users - return list of all users
// GET /time-tracks
import * as apiCallUrls from './apiCallUrls';
import { delay } from './utils';
import { employees } from '../data/users';

const getCurrentUser = async () => {
  await delay(300);
  const user = localStorage.getItem('currentUser');

  return { data: user };
}

const login = async (userData) => {
  await delay(300);

  const users = localStorage.getObject('users');

  if (!(userData.email in users) || userData.password !== users[userData.email]) {
    return { error: `User with email: ${userData.email} not found, or wrong password!` };
  }
  localStorage.setItem('currentUser', userData.email);

  return {
    data: userData.email
  };
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

  return {
    data: userData.email
  };
}

const logout = async () => {
  await delay(300);

  localStorage.removeItem('currentUser');

  return true;
}

const getUsers = async () => {
  await delay(300);

  return {
    data: {
      employees,
      employeesData: localStorage.getObject('employeesData'),
      createdEmployees: localStorage.getObject('createdEmployees')
    }
  };
}

const createUser = async (userData) => {
  await delay(300);

  const id = '_' + Date.now();
  const newEmployee = { id, ...userData };

  const createdEmployees = localStorage.getObject('createdEmployees') || [];
  createdEmployees.push(newEmployee);
  localStorage.setObject('createdEmployees', createdEmployees);

  return {
    data: { newEmployee, createdEmployees }
  };
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

    case apiCallUrls.GET_USERS:
      return await getUsers();

    case apiCallUrls.POST_USERS:
      return await createUser(opts.data);

    default:
      return null;
  }
}

export default apiCall;
