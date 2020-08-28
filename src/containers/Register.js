import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <div>Register</div>
  );
}

export default Register;
