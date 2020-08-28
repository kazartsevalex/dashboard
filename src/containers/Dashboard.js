import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = user !== null;

  if (!isAuthenticated) return <Redirect to="/login" />

  return (
    <Page>Dashboard</Page>
  );
}

export default Dashboard;
