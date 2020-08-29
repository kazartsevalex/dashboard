import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
  employees: null,
  employeesData: null,
  newEmployee: null,
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
        employees: null,
        employeesData: null
      });

    case actionTypes.GET_EMPLOYEES_SUCCESS:
      return updateObject(state, {
        loading: false,
        error: null,
        employees: action.employees,
        createdEmployees: action.createdEmployees,
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
        createdEmployees: action.createdEmployees
      });

    default:
      return state;
  }
}

export default reducer;
