import * as apiCallUrls from './apiCallUrls';
import { delay, EMPLOYEES_PER_PAGE } from './utils';
import { employees } from '../data/users';

const getCurrentUser = () => {
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

const getUsers = async ({ page, active }) => {
  await delay(300);

  const createdEmployees = localStorage.getObject('createdEmployees') || [];
  const employeesData = localStorage.getObject('employeesData');
  const allEmployees = [...createdEmployees, ...employees].filter(emp => {
    if (emp.id in employeesData) {
      return employeesData[emp.id].active === active;
    }

    return emp.active === active;
  });
  const start = page * EMPLOYEES_PER_PAGE;
  const end = start + EMPLOYEES_PER_PAGE;
  const paginatedEmployees = allEmployees.slice(start, end);

  return {
    data: {
      employeesData,
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

const getUserById = async (id) => {
  await delay(300);

  const createdEmployees = localStorage.getObject('createdEmployees') || [];
  let employee = createdEmployees.find(emp => emp.id === id);
  if (!employee) {
    employee = employees.find(emp => emp.id == id);
  }
  if (!employee) {
    return {
      error: "No employee with that id!"
    };
  }

  const employeesData = localStorage.getObject('employeesData');
  if (employeesData && employeesData[id]) {
    employee = { ...employee, ...employeesData[id] };
  }

  return {
    data: {
      employee
    }
  };
}

const updateUserById = async ({ id, active }) => {
  await delay(300);

  const employeesData = localStorage.getObject('employeesData') || {};
  employeesData[id] = { ...employeesData[id], active: active };
  localStorage.setObject('employeesData', employeesData);
  const employeeData = employeesData[id];

  return {
    data: {
      employeeData
    }
  };
}

const postTrackTime = async ({ id, ...rest }) => {
  await delay(300);

  const timetracks = localStorage.getObject('timetracks') || {};
  if (!timetracks[id]) {
    timetracks[id] = [{ ...rest }];
  } else {
    timetracks[id] = [ ...timetracks[id], { ...rest } ];
  }
  localStorage.setObject('timetracks', timetracks);
  const timetracksForEmployee = timetracks[id];

  return {
    data: {
      timetracksForEmployee
    }
  };
}

const getTimetracksById = async ({ id }) => {
  await delay(300);

  const timetracks = localStorage.getObject('timetracks') || {};
  const timetracksForEmployee = timetracks[id] || [];

  return {
    data: {
      timetracksForEmployee
    }
  };
}

const getTimetracks = async () => {
  await delay(300);

  const timetracks = localStorage.getObject('timetracks') || {};

  return {
    data: {
      timetracks
    }
  };
}

const apiCall = async (opts) => {
  switch (opts.url) {
    case apiCallUrls.CURRENT_USER:
      return getCurrentUser();

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

    case apiCallUrls.GET_USER_BY_ID:
      return await getUserById(opts.data);

    case apiCallUrls.PUT_USER_INFO_BY_ID:
      return await updateUserById(opts.data);

    case apiCallUrls.TRACK_TIME:
      return await postTrackTime(opts.data);

    case apiCallUrls.GET_TIMETRACKS_BY_ID:
      return await getTimetracksById(opts.data);

    case apiCallUrls.GET_TIMETRACKS:
      return await getTimetracks();

    default:
      return null;
  }
}

export default apiCall;
