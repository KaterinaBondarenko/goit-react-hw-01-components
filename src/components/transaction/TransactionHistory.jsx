import PropTypes from 'prop-types';
import {
  Table,
  ColumnTitle,
  TableRow,
  TypeItem,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id} index={index}>
              <TypeItem>{type}</TypeItem>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
