import React from 'react';
import styled from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Header = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;;
  z-index: 90;
`;

const DesktopOnlyNav = styled.nav`
  width: 100%;
  height: 100%;
  @media (max-width: 499px) {
    display: none;
  }
`;

const toolbar = (props) => (
  <Header>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <DesktopOnlyNav>
      <NavigationItems />
    </DesktopOnlyNav>
  </Header>
);

export default toolbar;
