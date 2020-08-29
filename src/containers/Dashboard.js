import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import { getEmployees } from '../store/actions/index';
import CreateEmployee from './Dashboard/CreateEmployee';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { employees, createdEmployees, employeesData, newEmployee } = useSelector(state => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const totalEmployees = employees ? employees.length : 0;
  const totalCreatedEmployees = createdEmployees ? createdEmployees.length : 0;

  return (
    <Page>
      <Main>
        <section>
          <H1>General summary</H1>
          total employees: {totalEmployees}<br />
          created employees: {totalCreatedEmployees}<br />
          employeesData: {employeesData || '---'}
          <CreateEmployee />
        </section>
        <section>
          <H1>Table filters</H1>
        </section>
        <section>
          <H1>Table</H1>
        </section>
      </Main>
    </Page>
  );
}

export default Dashboard;
