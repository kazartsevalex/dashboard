import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <div>Login</div>
  );
}

export default Login;
