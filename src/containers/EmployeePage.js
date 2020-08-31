import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../elements/Page';
import Main from '../elements/Main';
import H1 from '../elements/H1';
import FormError from '../elements/FormError';
import { getEmployeeById, updateEmployeeById, getTimetracksById } from '../store/actions/index';
import AddTime from './EmployeePage/AddTime';
import TableRow from '../elements/TableRow';

const EmployeePage = (props) => {
  const dispatch = useDispatch();
  const { employee, error, employeeData, loading } = useSelector(state => state.employees);
  const { timetracksForEmployee } = useSelector(state => state.time);
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

  const renderTimetracks = () => {
    if (!timetracksForEmployee.length) return null;

    const output = [
      <TableRow key={`table_head_${timetracksForEmployee.length}`} type="head">
        <div><strong>From</strong></div>
        <div><strong>To</strong></div>
        <div><strong>Total time</strong></div>
        <div><strong>Productive time</strong></div>
        <div><strong>Unproductive time</strong></div>
        <div><strong>Neutral</strong></div>
      </TableRow>
    ];
    timetracksForEmployee.forEach(tt => {
      output.push(
        <TableRow key={`tt_${tt.datestart}_${tt.total}`}>
          <div>{tt.datestart}</div>
          <div>{tt.dateend}</div>
          <div>{tt.total}</div>
          <div>{tt.productive}</div>
          <div>{tt.unproductive}</div>
          <div>{tt.neutral}</div>
        </TableRow>
      );
    });

    return output;
  }

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(123)
    dispatch(getTimetracksById(id));
  }, [dispatch, id]);

  const showError = error ? <FormError>{error}</FormError> : null;

  const employeeDetails = !loading && employee ? (
    <div>
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
      {renderTimetracks()}
      <AddTime id={employee.id} />
    </div>
  ) : <p>Loading...</p>;

  return (
    <Page>
      <Main>
        <H1>Employee Page</H1>
        {showError}
        <div>
          {employeeDetails}
        </div>
      </Main>
    </Page>
  );
}

export default EmployeePage;
