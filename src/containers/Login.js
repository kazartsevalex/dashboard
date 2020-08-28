import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const isAuthenticated = true;

  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <div>Login</div>
  );
}

export default Login;
