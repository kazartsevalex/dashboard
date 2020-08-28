import * as actionTypes from './actionTypes';
import apiCall from '../../shared/apiCall';
import * as apiCallUrls from '../../shared/apiCallUrls';

export const fetchUser = () => async dispatch => {
  const user = await apiCall(apiCallUrls.CURRENT_USER);

  dispatch({
    type: actionTypes.FETCH_USER,
    user: user
  });
};
