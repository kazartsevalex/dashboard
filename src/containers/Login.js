import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../elements/Page';
import H1 from '../elements/H1';
import AuthBlock from '../elements/AuthBlock';
import FormError from '../elements/FormError';
import AuthForm from '../components/Forms/AuthForm';
import { loginUser } from '../store/actions/index';

const Login = () => {
  const { user, error, loading } = useSelector(state => state.auth);
  const isAuthenticated = user !== null;

  const dispatch = useDispatch();
  const onSubmit = (userData) => {
    dispatch(loginUser(userData));
  }

  if (isAuthenticated) return <Redirect to="/dashboard" />

  const errors = error ? <FormError>{error}</FormError> : null;
  const form = loading ? <p>Loading...</p> : (
    <AuthForm
      type="login"
      onSubmit={onSubmit}
    />
  );

  return (
    <Page>
      <AuthBlock>
        <H1>Login</H1>
        {errors}
        {form}
      </AuthBlock>
    </Page>
  );
}

export default Login;
