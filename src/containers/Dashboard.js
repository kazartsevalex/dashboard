import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  if (!isAuthenticated) return <Redirect to="/login" />

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
