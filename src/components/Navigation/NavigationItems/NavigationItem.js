import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavigationItem = styled.li`
  box-sizing: border-box;
  display: block;
  width: 100%;
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    align-items: center;
    width: auto;
    ${props => {
      if (props.flexAlign && props.flexAlign === 'left') {
        return css`margin-right: auto;`;
      }
    }}
  }
`;

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
  <NavigationItem flexAlign={props.flexAlign}>
    <NavigationItemLink
      exact={props.exact}
      to={props.link}
    >
      {props.children}
    </NavigationItemLink>
  </NavigationItem>
);

export default navigationItem;
