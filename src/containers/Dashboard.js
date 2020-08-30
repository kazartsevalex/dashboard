import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import { getEmployees } from '../store/actions/index';
import CreateEmployee from './Dashboard/CreateEmployee';
import EmployeesList from './Dashboard/EmployeesList';
import EmployeesPagination from './Dashboard/EmployeesPagination';
import { EMPLOYEES_PER_PAGE } from '../shared/utils';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalEmployees, paginatedEmployees, employeesData } = useSelector(state => state.employees);
  const [page, setPage] = useState(0);
  const setCurrentPage = (newPage) => setPage(newPage);
  const totalPages = Math.ceil(totalEmployees / EMPLOYEES_PER_PAGE);

  useEffect(() => {
    console.log('getting employees')
    dispatch(getEmployees(page));
  }, [dispatch, page, totalEmployees]);

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
          <EmployeesList employees={paginatedEmployees} />
          <EmployeesPagination totalPages={totalPages} page={page} setCurrentPage={setCurrentPage} />
        </section>
      </Main>
    </Page>
  );
}

export default Dashboard;
