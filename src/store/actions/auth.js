import * as actionTypes from './actionTypes';
import { delay } from '../../shared/utils';

async function getUser() {
  await delay(100);
  const user = localStorage.getItem('currentUser');

  return user;
}

export const fetchUser = () => async dispatch => {
  const user = await getUser()

  dispatch({
    type: actionTypes.FETCH_USER,
    user: user
  });
};
