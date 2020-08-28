import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  return isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/login" />;
}

export default Home;
