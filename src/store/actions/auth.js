import * as actionTypes from './actionTypes';
import apiCall from '../../shared/apiCall';
import * as apiCallUrls from '../../shared/apiCallUrls';

export const fetchUser = () => async dispatch => {
  const user = await apiCall({
    url: apiCallUrls.CURRENT_USER
  });

  dispatch({
    type: actionTypes.FETCH_USER,
    user: user
  });
};

export const registerUserSuccess = (userData) => {
  return {
    type: actionTypes.REGISTER_USER_SUCCESS,
    user: userData
  };
};

export const registerUserFail = (error) => {
  return {
    type: actionTypes.REGISTER_USER_FAIL,
    error: error
  };
};

export const registerUserStart = () => {
  return {
    type: actionTypes.REGISTER_USER_START
  };
};

export const registerUser = (userData) => async dispatch => {
  dispatch(registerUserStart());

  const response = await apiCall({
    url: apiCallUrls.REGISTER,
    data: userData
  });

  if (response.error) {
    dispatch(registerUserFail(response.error));
  } else {
    dispatch(registerUserSuccess(response.data));
  }
};

export const loginUserSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    user: userData
  };
};

export const loginUserFail = (error) => {
  return {
    type: actionTypes.LOGIN_USER_FAIL,
    error: error
  };
};

export const loginUserStart = () => {
  return {
    type: actionTypes.LOGIN_USER_START
  };
};

export const loginUser = (userData) => async dispatch => {
  dispatch(loginUserStart());

  const response = await apiCall({
    url: apiCallUrls.OAUTH_AUTHENTICATE,
    data: userData
  });

  if (response.error) {
    dispatch(loginUserFail(response.error));
  } else {
    dispatch(loginUserSuccess(response.data));
  }
};
