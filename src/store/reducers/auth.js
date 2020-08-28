import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
  user: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return updateObject(state, { user: action.user });

    case actionTypes.REGISTER_USER_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.REGISTER_USER_FAIL:
      return updateObject(state, { loading: false, error: action.error, user: null });

    case actionTypes.REGISTER_USER_SUCCESS:
      return updateObject(state, { loading: false, error: null, user: action.user });

    case actionTypes.LOGIN_USER_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.LOGIN_USER_FAIL:
      return updateObject(state, { loading: false, error: action.error, user: null });

    case actionTypes.LOGIN_USER_SUCCESS:
      return updateObject(state, { loading: false, error: null, user: action.user });

    default:
      return state;
  }
}

export default reducer;
