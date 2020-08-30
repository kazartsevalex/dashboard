import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import FormError from '../../elements/FormError';
import InputGroup from '../../elements/InputGroup';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

const Form = styled.form`
  padding: 30px 0;
`;

const CreateEmployeeForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.onSubmit(data);
  };

  const textOptions = { required: true };
  const firstnameErrorMessage = <FormError>Please enter first name.</FormError>;
  const lastnameErrorMessage = <FormError>Please enter last name.</FormError>;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <label>First name</label>
        <Input
          name="firstname"
          type="text"
          ref={register(textOptions)}
        />
        {errors.firstname && firstnameErrorMessage}
      </InputGroup>
      <InputGroup>
        <label>Last name</label>
        <Input
          name="lastname"
          type="text"
          ref={register(textOptions)}
        />
        {errors.lastname && lastnameErrorMessage}
      </InputGroup>
      <InputGroup>
        <label>Active
        <input
          name="active"
          type="checkbox"
          ref={register()}
        /></label>
      </InputGroup>
      <Button type="submit">Create Employee</Button>
    </Form>
  )
};

export default CreateEmployeeForm;
