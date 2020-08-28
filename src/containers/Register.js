import React from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const isAuthenticated = true;

  if (isAuthenticated) return <Redirect to="/dashboard" />

  return (
    <div>Register</div>
  );
}

export default Register;
