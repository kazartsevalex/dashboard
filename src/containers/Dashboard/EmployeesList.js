import React from 'react';

import EmployeesListItem from './EmployeesListItem';
import TableRow from '../../elements/TableRow';

const EmployeesList = ({ employees, employeesData }) => {
  const emps = [
    <TableRow key={`table_head_${employees.length}`} type="head">
      <div><strong>Name</strong></div>
      <div><strong>Total time</strong></div>
      <div><strong>Productive time</strong></div>
      <div><strong>Unproductive time</strong></div>
      <div><strong>Ratio</strong></div>
      <div><strong>Link</strong></div>
    </TableRow>
  ];

  employees.forEach(emp => {
    const empData = employeesData ? employeesData[emp.id] : null;
    emps.push(<EmployeesListItem key={emp.id} employee={emp} employeeData={empData} />);
  });

  return emps;
}

export default EmployeesList;
