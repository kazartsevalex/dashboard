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
  border: 2px solid #999;
  color: #999;
  transition: all 0.25s;
  &:hover {
    color: #fff;
    background-color: #999;
  }
  ${props => {
    if (props.type === 'submit') {
      return css`
        border: 2px solid green;
        color: green;
        &:hover {
          background-color: green;
        }
      `;
    }
    if (props.type === 'abort') {
      return css`
        border: 2px solid red;
        color: red;
        &:hover {
          background-color: red;
        }
      `;
    }
  }}
`;

export default Button;
