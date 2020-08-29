import styled, { css } from 'styled-components';

const NavigationItemLi = styled.li`
  box-sizing: border-box;
  display: block;
  width: 100%;
  color: #fff;
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

export default NavigationItemLi;
