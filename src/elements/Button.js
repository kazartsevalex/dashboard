import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  padding: 8px 32px;
  margin: 8px 0;
  border-radius: 5px;
  box-sizing: border-box;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: all 0.25s;
  ${props => {
    if (props.type === 'submit') {
      return css`
        border: 2px solid green;
        color: green;
        &:hover {
          color: #fff;
          background-color: green;
        }
      `;
    }
    if (props.type === 'abort') {
      return css`
        border: 2px solid red;
        color: red;
        &:hover {
          color: #fff;
          background-color: red;
        }
      `;
    }
  }}
`;

export default Button;
