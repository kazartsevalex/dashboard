import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

const DrawerDiv = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
`;

const drawerToggle = (props) => (
  <DrawerDiv onClick={props.clicked}>
    <Div></Div>
    <Div></Div>
    <Div></Div>
  </DrawerDiv>
);

export default drawerToggle;
