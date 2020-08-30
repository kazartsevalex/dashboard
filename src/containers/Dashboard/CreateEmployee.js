import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createEmployee } from '../../store/actions/index';
import CreateEmployeeForm from '../../components/Forms/CreateEmployeeForm';
import Button from '../../elements/Button';

function CreateEmployee() {
  const [formVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(prev => !prev);
  };

  const dispatch = useDispatch();
  const submitCreateEmployee = (userData) => {
    dispatch(createEmployee(userData));
    setFormVisible(false);
  };

  const createEmployeeForm = formVisible ? <CreateEmployeeForm onSubmit={submitCreateEmployee} /> : null;

  const buttonText = formVisible ? 'Hide Form' : 'Add New Employee';

  return (
    <div>
      <div>
        <Button onClick={toggleFormVisibility}>{buttonText}</Button>
      </div>
      {createEmployeeForm}
    </div>
  )
};

export default CreateEmployee;
