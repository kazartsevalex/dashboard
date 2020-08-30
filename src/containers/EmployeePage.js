import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import FormError from '../elements/FormError';
import { getEmployeeById } from '../store/actions/index';

const EmployeePage = (props) => {
  const dispatch = useDispatch();
  const { employee, error } = useSelector(state => state.employees);
  const id = props.match.params.id;

  useEffect(() => {
    console.log('getting employee by id')
    dispatch(getEmployeeById(id));
  }, [dispatch, id]);

  const title = employee ? `${employee.firstname} ${employee.lastname}` : 'Employee Page';
  const showError = error ? <FormError>{error}</FormError> : null;

  return (
    <Page>
      <Main>
        <H1>{title}</H1>
        {showError}
      </Main>
    </Page>
  );
}

export default EmployeePage;
