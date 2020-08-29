// POST /users/:userId/time-tracks - Add new track entry for the user
// PUT /users/:userId - Update user information
// GET /time-tracks
import * as apiCallUrls from './apiCallUrls';
import { delay } from './utils';
import { employees } from '../data/users';

const EMPLOYEES_PER_PAGE = 24;

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

const getUsers = async ({ page }) => {
  await delay(300);

  const createdEmployees = localStorage.getObject('createdEmployees') || [];
  const allEmployees = [...createdEmployees, ...employees];
  const start = page * EMPLOYEES_PER_PAGE;
  const end = start + EMPLOYEES_PER_PAGE;
  const paginatedEmployees = allEmployees.slice(start, end);

  return {
    data: {
      employeesData: localStorage.getObject('employeesData'),
      totalEmployees: allEmployees.length,
      paginatedEmployees
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
  const allEmployees = [...createdEmployees, ...employees];

  return {
    data: {
      newEmployee,
      totalEmployees: allEmployees.length
    }
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
      return await getUsers(opts.data);

    case apiCallUrls.POST_USERS:
      return await createUser(opts.data);

    default:
      return null;
  }
}

export default apiCall;
