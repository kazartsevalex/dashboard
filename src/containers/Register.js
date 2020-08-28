import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../elements/Page';
import H1 from '../elements/H1';
import AuthBlock from '../elements/AuthBlock';
import AuthForm from '../components/AuthForm/AuthForm';

const Register = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <Page>
      <AuthBlock>
        <H1>Registration</H1>
        <AuthForm type="register" />
      </AuthBlock>
    </Page>
  );
}

export default Register;
