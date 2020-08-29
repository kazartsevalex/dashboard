import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import NavigationItemLi from '../../../elements/NavigationItemLi';

const NavigationItemLink = styled(NavLink)`
  font-size: 21px;
  color: #fff;
  text-decoration: none;
  width: 100%;
	padding: 15px 30px;
  box-sizing: border-box;
  display: block;
  height: 100%;
  position: relative;
  &:hover {
    background-color: #222;
  }
`;

const navigationItem = (props) => (
  <NavigationItemLi flexAlign={props.flexAlign}>
    <NavigationItemLink
      exact={props.exact}
      to={props.link}
    >
      {props.children}
    </NavigationItemLink>
  </NavigationItemLi>
);

export default navigationItem;
