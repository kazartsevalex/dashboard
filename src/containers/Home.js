import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/login" />;
}

export default Home;
