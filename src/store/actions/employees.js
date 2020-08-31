import * as actionTypes from './actionTypes';
import apiCall from '../../shared/apiCall';
import * as apiCallUrls from '../../shared/apiCallUrls';

export const getEmployeesSuccess = ({ totalEmployees, paginatedEmployees, employeesData }) => {
  return {
    type: actionTypes.GET_EMPLOYEES_SUCCESS,
    totalEmployees,
    paginatedEmployees,
    employeesData
  };
};

export const getEmployeesFail = (error) => {
  return {
    type: actionTypes.GET_EMPLOYEES_FAIL,
    error: error
  };
};

export const getEmployeesStart = () => {
  return {
    type: actionTypes.GET_EMPLOYEES_START
  };
};

export const getEmployees = (page, active) => async dispatch => {
  dispatch(getEmployeesStart());

  const response = await apiCall({
    url: apiCallUrls.GET_USERS,
    data: {
      page,
      active
    }
  });

  if (response.error) {
    dispatch(getEmployeesFail(response.error));
  } else {
    dispatch(getEmployeesSuccess(response.data));
  }
};

export const createEmployeeSuccess = ({ newEmployee, totalEmployees }) => {
  return {
    type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
    newEmployee,
    totalEmployees
  };
};

export const createEmployeeFail = (error) => {
  return {
    type: actionTypes.CREATE_EMPLOYEE_FAIL,
    error: error
  };
};

export const createEmployeeStart = () => {
  return {
    type: actionTypes.CREATE_EMPLOYEE_START
  };
};

export const createEmployee = (userData) => async dispatch => {
  dispatch(createEmployeeStart());

  const response = await apiCall({
    url: apiCallUrls.POST_USERS,
    data: userData
  });

  if (response.error) {
    dispatch(createEmployeeFail(response.error));
  } else {
    dispatch(createEmployeeSuccess(response.data));
  }
};

export const getEmployeeByIdSuccess = ({ employee }) => {
  return {
    type: actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS,
    employee
  };
};

export const getEmployeeByIdFail = (error) => {
  return {
    type: actionTypes.GET_EMPLOYEE_BY_ID_FAIL,
    error: error
  };
};

export const getEmployeeByIdStart = () => {
  return {
    type: actionTypes.GET_EMPLOYEE_BY_ID_START
  };
};

export const getEmployeeById = (id) => async dispatch => {
  dispatch(getEmployeeByIdStart());

  const response = await apiCall({
    url: apiCallUrls.GET_USER_BY_ID,
    data: id
  });

  if (response.error) {
    dispatch(getEmployeeByIdFail(response.error));
  } else {
    dispatch(getEmployeeByIdSuccess(response.data));
  }
};

export const updateEmployeeByIdSuccess = ({ employeeData }) => {
  return {
    type: actionTypes.UPDATE_EMPLOYEE_BY_ID_SUCCESS,
    employeeData
  };
};

export const updateEmployeeByIdFail = (error) => {
  return {
    type: actionTypes.UPDATE_EMPLOYEE_BY_ID_FAIL,
    error: error
  };
};

export const updateEmployeeByIdStart = () => {
  return {
    type: actionTypes.UPDATE_EMPLOYEE_BY_ID_START
  };
};

export const updateEmployeeById = (id, active) => async dispatch => {
  dispatch(updateEmployeeByIdStart());

  const response = await apiCall({
    url: apiCallUrls.PUT_USER_INFO_BY_ID,
    data: { id, active }
  });

  if (response.error) {
    dispatch(updateEmployeeByIdFail(response.error));
  } else {
    dispatch(updateEmployeeByIdSuccess(response.data));
  }
};
