import styled from 'styled-components';

const InputGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 10px 0;
  width: 360px;
  box-sizing: border-box;
  @media (max-width: 500px) {
    width: 100%;
    padding: 10px 15px;
  }
`;

export default InputGroup;
