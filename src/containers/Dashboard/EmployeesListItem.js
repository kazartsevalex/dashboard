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

const EmployeesListItem = ({ employee }) => {
  return (
    <TableRow>
      <div>{employee.firstname} {employee.lastname}</div>
      <div>Total time</div>
      <div>Productive time</div>
      <div>Unproductive time</div>
      <div>Ratio</div>
      <SeeMoreLink to={`/employee/${employee.id}`}>
        See more details
      </SeeMoreLink>
    </TableRow>
  );
}

export default EmployeesListItem;
