import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
  paginatedEmployees: [],
  employeesData: null,
  newEmployee: null,
  employee: null,
  totalEmployees: 0,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.GET_EMPLOYEES_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
        paginatedEmployees: [],
        employeesData: null
      });

    case actionTypes.GET_EMPLOYEES_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        totalEmployees: action.totalEmployees,
        paginatedEmployees: action.paginatedEmployees,
        employeesData: action.employeesData
      });

    case actionTypes.CREATE_EMPLOYEE_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.CREATE_EMPLOYEE_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
        newEmployee: null
      });

    case actionTypes.CREATE_EMPLOYEE_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        newEmployee: action.newEmployee,
        totalEmployees: action.totalEmployees
      });

    case actionTypes.GET_EMPLOYEE_BY_ID_START:
      return updateObject(state, { loading: true, error: null });

    case actionTypes.GET_EMPLOYEE_BY_ID_FAIL:
      return updateObject(state, {
        loading: false,
        error: action.error,
        employee: null
      });

    case actionTypes.GET_EMPLOYEE_BY_ID_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        employee: action.employee
      });

    default:
      return state;
  }
}

export default reducer;
