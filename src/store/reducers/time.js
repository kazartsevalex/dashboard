import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
  timetracksForEmployee: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRACK_TIME_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.TRACK_TIME_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
        timetracksForEmployee: []
      });

    case actionTypes.TRACK_TIME_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        timetracksForEmployee: action.timetracksForEmployee
      });

    case actionTypes.GET_TIMETRACKS_BY_ID_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.GET_TIMETRACKS_BY_ID_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
        timetracksForEmployee: []
      });

    case actionTypes.GET_TIMETRACKS_BY_ID_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        timetracksForEmployee: action.timetracksForEmployee
      });

    default:
      return state;
  }
}

export default reducer;
