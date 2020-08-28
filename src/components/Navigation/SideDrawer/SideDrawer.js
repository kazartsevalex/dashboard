import React from 'react';
import styled, { css } from 'styled-components';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Div = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #111;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  ${props => {
    if (props.open) {
      return css`transform: translateX(0);`;
    }
    return css`transform: translateX(-100%);`;
  }}
  @media (min-width: 500px) {
    display: none;
  }
`;

const sideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <Div onClick={props.closed} open={props.open}>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </Div>
    </>
  );
};

export default sideDrawer;
