import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import { getEmployees, getTimetracks } from '../store/actions/index';
import CreateEmployee from './Dashboard/CreateEmployee';
import EmployeesList from './Dashboard/EmployeesList';
import EmployeesPagination from './Dashboard/EmployeesPagination';
import { EMPLOYEES_PER_PAGE } from '../shared/utils';
import Input from '../elements/Input';
import Button from '../elements/Button';

const Filters = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 15px 0;
  & > div {
    width: 30%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-start;
    &:first-child {
      align-items: flex-start;
    }
    &:last-child {
      align-items: flex-end;
    }
  }
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalEmployees, paginatedEmployees, employeesData } = useSelector(state => state.employees);
  const [paginatedEmployeesToShow, setPaginatedEmployeesToShow] = useState([]);
  const { timetracks } = useSelector(state => state.time);
  const [page, setPage] = useState(0);
  const setCurrentPage = (newPage) => setPage(newPage);
  const totalPages = Math.ceil(totalEmployees / EMPLOYEES_PER_PAGE);

  const [active, setActive] = useState(true);
  const changeActive = () => {
    setActive(prev => !prev);
  }

  useEffect(() => {
    dispatch(getEmployees(page, active));
    setPaginatedEmployeesToShow([...paginatedEmployees]);
  }, [dispatch, page, totalEmployees, active]);

  useEffect(() => {
    dispatch(getTimetracks(active));
  }, [dispatch, totalEmployees, active]);

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

  const [nameFilter, setNameFilter] = useState('');
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const filterEmployees = () => {
    let newEmps = paginatedEmployees.filter(emp => {
      return emp.firstname.toLowerCase().includes(nameFilter) || emp.lastname.toLowerCase().includes(nameFilter);
    });
    if (dateRange) {
      if (dateRange[0] - dateRange[1] !== 0) {
        newEmps = newEmps.filter(emp => {
          let flag = false;
          if (emp.id in timetracks) {
            timetracks[emp.id].forEach(tt => {
              if (dateRange[0] <= new Date(tt.datestart) && dateRange[1] >= new Date(tt.dateend)) {
                flag = true;
              }
            });
          }

          return flag;
        });
      }
    }
    setPaginatedEmployeesToShow(newEmps);
  }

  useEffect(() => {
    filterEmployees();
  }, [nameFilter, dateRange]);

  const [dateFilterVisible, setDateFilterVisible] = useState(false);
  const buttonDateFilterText = dateFilterVisible ? 'Hide Form' : 'Filter By Date';
  const toggleDateFilter = () => {
    setDateFilterVisible(prev => !prev);
  }
  const onDateChange = (val) => {
    if (val === null) {
      val = [new Date(), new Date()];
    }
    setDateRange(val);
    filterEmployees();
  }

  const buttonType = active ? 'abort' : 'submit';
  const buttonText = active ? 'Show Deactivated Only' : 'Show Active Only';
  const filterByName = (e) => {
    const name = e.target.value.trim();
    setNameFilter(name);
    filterEmployees();
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
          <Filters>
            <div>
              <Input type="text" value={nameFilter} onChange={filterByName} />
            </div>
            <div>
              <Button onClick={toggleDateFilter}>{buttonDateFilterText}</Button>
              {dateFilterVisible ? (
                <DateTimeRangePicker
                  onChange={onDateChange}
                  value={dateRange}
                  required={true}
                />
              ) : null}
            </div>
            <div>
              <Button type={buttonType} onClick={changeActive}>{buttonText}</Button>
            </div>
          </Filters>
        </section>
        <section>
          <EmployeesList employees={paginatedEmployeesToShow} employeesData={employeesData} timetracks={timetracks} />
          <EmployeesPagination totalPages={totalPages} page={page} setCurrentPage={setCurrentPage} />
        </section>
      </Main>
    </Page>
  );
}

export default Dashboard;
