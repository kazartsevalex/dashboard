import React from 'react';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Redirect to="/login" />

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
