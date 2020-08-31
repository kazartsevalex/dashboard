import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TableRow from '../../elements/TableRow';

const SeeMoreLink = styled(Link)`
  display: block;
  font-size: 14px;
  text-decoration: none;
  background-color: #fff;
  border: 2px solid #999;
  color: #999;
  padding: 8px 32px;
  border-radius: 5px;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
  &:hover {
    color: #fff;
    background-color: #999;
    text-decoration: none;
  }
`;

const EmployeesListItem = ({ employee, employeeData, timetracksForEmployee }) => {
  if (employeeData) {
    employee = { ...employee, ...employeeData };
  }

  let total = 0, productive = 0, unproductive = 0, ratio = 0;
  if (timetracksForEmployee.length) {
    timetracksForEmployee.forEach(tt => {
      total += parseInt(tt.total, 10);
      productive += parseInt(tt.productive, 10);
      unproductive += parseInt(tt.unproductive, 10);
    });
    ratio = (productive / unproductive).toFixed(2);
  }

  return (
    <TableRow active={employee.active}>
      <div>{employee.firstname} {employee.lastname}</div>
      <div>{total || 'Total time'}</div>
      <div>{productive || 'Productive time'}</div>
      <div>{unproductive || 'Unproductive time'}</div>
      <div>{ratio || 'Ratio'}</div>
      <div>
        <SeeMoreLink to={`/employee/${employee.id}`}>
          See more details
        </SeeMoreLink>
      </div>
    </TableRow>
  );
}

export default EmployeesListItem;
