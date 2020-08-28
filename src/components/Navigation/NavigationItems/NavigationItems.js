import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';

const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: flex-start;
  height: 100%;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

const navigationItems = (props) => (
  <NavigationItems>
    <NavigationItem flexAlign="left" link="/dashboard" exact>Dashboard</NavigationItem>
    { props.isAuthenticated
      ? <NavigationItem link="/logout">Log Out</NavigationItem>
      : <>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/register">Register</NavigationItem>
      </>
    }
  </NavigationItems>
);

export default navigationItems;
