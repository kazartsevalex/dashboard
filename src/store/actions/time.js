import * as actionTypes from './actionTypes';
import apiCall from '../../shared/apiCall';
import * as apiCallUrls from '../../shared/apiCallUrls';

export const trackTimeSuccess = ({ timetracksForEmployee }) => {
  return {
    type: actionTypes.TRACK_TIME_SUCCESS,
    timetracksForEmployee
  };
};

export const trackTimeFail = (error) => {
  return {
    type: actionTypes.TRACK_TIME_FAIL,
    error: error
  };
};

export const trackTimeStart = () => {
  return {
    type: actionTypes.TRACK_TIME_START
  };
};

export const trackTime = (data) => async dispatch => {
  dispatch(trackTimeStart());

  const response = await apiCall({
    url: apiCallUrls.TRACK_TIME,
    data
  });

  if (response.error) {
    dispatch(trackTimeFail(response.error));
  } else {
    dispatch(trackTimeSuccess(response.data));
  }
};

export const getTimetracksByIdSuccess = ({ timetracksForEmployee }) => {
  return {
    type: actionTypes.GET_TIMETRACKS_BY_ID_SUCCESS,
    timetracksForEmployee
  };
};

export const getTimetracksByIdFail = (error) => {
  return {
    type: actionTypes.GET_TIMETRACKS_BY_ID_FAIL,
    error: error
  };
};

export const getTimetracksByIdStart = () => {
  return {
    type: actionTypes.GET_TIMETRACKS_BY_ID_START
  };
};

export const getTimetracksById = (id) => async dispatch => {
  dispatch(getTimetracksByIdStart());

  const response = await apiCall({
    url: apiCallUrls.GET_TIMETRACKS_BY_ID,
    data: { id }
  });

  if (response.error) {
    dispatch(getTimetracksByIdFail(response.error));
  } else {
    dispatch(getTimetracksByIdSuccess(response.data));
  }
};

export const getTimetracksSuccess = ({ timetracks }) => {
  return {
    type: actionTypes.GET_TIMETRACKS_SUCCESS,
    timetracks
  };
};

export const getTimetracksFail = (error) => {
  return {
    type: actionTypes.GET_TIMETRACKS_FAIL,
    error: error
  };
};

export const getTimetracksStart = () => {
  return {
    type: actionTypes.GET_TIMETRACKS_START
  };
};

export const getTimetracks = () => async dispatch => {
  dispatch(getTimetracksStart());

  const response = await apiCall({
    url: apiCallUrls.GET_TIMETRACKS
  });

  if (response.error) {
    dispatch(getTimetracksFail(response.error));
  } else {
    dispatch(getTimetracksSuccess(response.data));
  }
};
