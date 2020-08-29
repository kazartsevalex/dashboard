import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import NavigationItem from './NavigationItem';
import NavigationItemLi from '../../../elements/NavigationItemLi';

const NavigationItemsUl = styled.ul`
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

const NavigationItems = () => {
  const { user } = useSelector(state => state.auth);
  const isAuthenticated = user !== null;

  return (
    <NavigationItemsUl>
      <NavigationItem flexAlign="left" link="/dashboard" exact>Dashboard</NavigationItem>
      { isAuthenticated
        ? <>
          <NavigationItemLi>{user}</NavigationItemLi>
          <NavigationItem link="/logout">Log Out</NavigationItem>
        </>
        : <>
          <NavigationItem link="/login">Login</NavigationItem>
          <NavigationItem link="/register">Register</NavigationItem>
        </>
      }
    </NavigationItemsUl>
  );
};

export default NavigationItems;
