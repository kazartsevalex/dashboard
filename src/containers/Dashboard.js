import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import { getEmployees, getTimetracks } from '../store/actions/index';
import CreateEmployee from './Dashboard/CreateEmployee';
import EmployeesList from './Dashboard/EmployeesList';
import EmployeesPagination from './Dashboard/EmployeesPagination';
import { EMPLOYEES_PER_PAGE } from '../shared/utils';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalEmployees, paginatedEmployees, employeesData } = useSelector(state => state.employees);
  const { timetracks } = useSelector(state => state.time);
  const [page, setPage] = useState(0);
  const setCurrentPage = (newPage) => setPage(newPage);
  const totalPages = Math.ceil(totalEmployees / EMPLOYEES_PER_PAGE);

  const [active, setActive] = useState(true);

  useEffect(() => {
    console.log('getting employees')
    dispatch(getEmployees(page, active));
  }, [dispatch, page, totalEmployees]);

  useEffect(() => {
    console.log('getting timetracks')
    dispatch(getTimetracks());
  }, [dispatch, totalEmployees]);

  let total = 0, productive = 0, unproductive = 0;
  if (Object.keys(timetracks).length) {
    for (let id in timetracks) {
      timetracks[id].forEach(tt => {
        total += parseInt(tt.total, 10);
        productive += parseInt(tt.productive, 10);
        unproductive += parseInt(tt.unproductive, 10);
      });
    }
  }

  return (
    <Page>
      <Main>
        <section>
          <H1>General summary</H1>
          total employees: {totalEmployees}<br />
          total time: {total}<br />
          total productive: {productive}<br />
          total unproductive: {unproductive}
          <CreateEmployee />
        </section>
        <section>
          <H1>Table filters</H1>
        </section>
        <section>
          <EmployeesList employees={paginatedEmployees} employeesData={employeesData} timetracks={timetracks} />
          <EmployeesPagination totalPages={totalPages} page={page} setCurrentPage={setCurrentPage} />
        </section>
      </Main>
    </Page>
  );
}

export default Dashboard;
