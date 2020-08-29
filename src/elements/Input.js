import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #999;
  border-radius: 5px;
  height: 40px;
  padding: 8px;
  margin: 8px 0;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;
  outline: none;
  box-shadow: inset 0 0 5px #666;
  transition: box-shadow 0.25s;
  &:focus {
    box-shadow: 0 0 5px #666;
  }
`;

export default Input;
