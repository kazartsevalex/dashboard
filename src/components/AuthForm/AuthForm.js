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

const AuthForm = (props) => {
  const submitText = props.type === 'login' ? 'Login' : 'Register';

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.onSubmit(data);
  };

  const emailOptions = {
    required: true,
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };
  const emailErrorMessage = (
    <FormError>
      Please enter your email in <em>email@example.com</em> format.
    </FormError>
  );

  const passwordOptions = {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
  };
  const passwordErrorMessage = (
    <FormError>
      Password should contain at least one number, one uppercase letter and be at least 8 characters long.
    </FormError>
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <InputGroup>
        <label>Email</label>
        <Input
          name="email"
          type="email"
          ref={register(emailOptions)}
        />
        {errors.email && emailErrorMessage}
      </InputGroup>
      <InputGroup>
        <label>Password</label>
        <Input
          name="password"
          ref={register(passwordOptions)}
        />
        {errors.password && passwordErrorMessage}
      </InputGroup>
      <Button type="submit">{submitText}</Button>
    </Form>
  )
};

export default AuthForm;
