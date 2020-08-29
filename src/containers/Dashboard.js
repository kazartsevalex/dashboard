import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Page from '../elements/Page';
import H1 from '../elements/H1';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const isAuthenticated = user !== null;

  if (!isAuthenticated) return <Redirect to="/login" />

  return (
    <Page>
      <H1>Dashboard</H1>
    </Page>
  );
}

export default Dashboard;
