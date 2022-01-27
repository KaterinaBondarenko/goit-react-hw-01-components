import styled from '@emotion/styled';

export const Table = styled.table`
  border-radius: 6px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ColumnTitle = styled.th`
  width: 200px;
  height: 40px;
  text-transform: uppercase;
  background-color: rgb(89, 204, 160);
  color: rgb(256, 256, 256);
`;

export const TableRow = styled.tr`
height: 40px;
background-color: ${props =>
  props.index % 2 === 0 ? 'rgb(256, 256, 256);' : 'rgb(190, 190, 190);'}
color: rgb(117, 117, 117);
`;

export const TypeItem = styled.td`
  text-transform: capitalize;
`;
