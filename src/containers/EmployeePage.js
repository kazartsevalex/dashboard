import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import FormError from '../elements/FormError';
import { getEmployeeById, updateEmployeeById } from '../store/actions/index';

const EmployeePage = (props) => {
  const dispatch = useDispatch();
  const { employee, error, employeeData, loading } = useSelector(state => state.employees);
  const id = props.match.params.id;

  const isChecked = () => {
    let isActive;
    if (employee) {
      isActive = employee.active;
    }
    if (employeeData) {
      isActive = employeeData.active;
    }

    return isActive;
  }

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, [dispatch, id]);

  const showError = error ? <FormError>{error}</FormError> : null;

  const employeeDetails = !loading && employee ? (
    <p>
      Id: {employee.id}<br />
      First name: {employee.firstname}<br />
      Last name: {employee.lastname}<br />
      Is Active:
      <input
        type="checkbox"
        defaultChecked={isChecked()}
        onChange={() => dispatch(updateEmployeeById(employee.id, !isChecked()))}
      />
    </p>
  ) : <p>Loading...</p>;

  return (
    <Page>
      <Main>
        <H1>Employee Page</H1>
        {showError}
        {employeeDetails}
      </Main>
    </Page>
  );
}

export default EmployeePage;
