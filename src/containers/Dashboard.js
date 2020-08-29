import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import { getEmployees } from '../store/actions/index';
import CreateEmployee from './Dashboard/CreateEmployee';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalEmployees, paginatedEmployees, employeesData } = useSelector(state => state.employees);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log('getting employees')
    dispatch(getEmployees(page));
  }, [dispatch, page]);

  const drawEmployees = () => {
    const emps = [];

    paginatedEmployees.forEach(employee => {
      emps.push(
        <div key={employee.id}>
          {employee.firstname} {employee.lastname}
        </div>
      );
    })

    return emps;
  }

  return (
    <Page>
      <Main>
        <section>
          <H1>General summary</H1>
          total employees: {totalEmployees}<br />
          employeesData: {employeesData || '---'}
          <CreateEmployee />
        </section>
        <section>
          <H1>Table filters</H1>
        </section>
        <section>
          {drawEmployees()}
        </section>
      </Main>
    </Page>
  );
}

export default Dashboard;
