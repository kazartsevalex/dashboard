import styled from 'styled-components';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 5px 15px;
  box-sizing: border-box;
  min-height: 60px;
  &:hover {
    background-color: #eee;
  }
  & > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.active ? 'green' : '#666'};
  }
`;

export default TableRow;
