import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return updateObject(state, { user: action.user });

    default:
      return state;
  }
}

export default reducer;
