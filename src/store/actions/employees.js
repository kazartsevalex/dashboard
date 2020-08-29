import * as actionTypes from './actionTypes';
import apiCall from '../../shared/apiCall';
import * as apiCallUrls from '../../shared/apiCallUrls';

export const getEmployeesSuccess = ({ employees, createdEmployees, employeesData }) => {
  return {
    type: actionTypes.GET_EMPLOYEES_SUCCESS,
    employees,
    createdEmployees,
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

export const getEmployees = () => async dispatch => {
  dispatch(getEmployeesStart());

  const response = await apiCall({
    url: apiCallUrls.GET_USERS
  });

  if (response.error) {
    dispatch(getEmployeesFail(response.error));
  } else {
    dispatch(getEmployeesSuccess(response.data));
  }
};

export const createEmployeeSuccess = ({ newEmployee, createdEmployees }) => {
  return {
    type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
    newEmployee,
    createdEmployees
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
