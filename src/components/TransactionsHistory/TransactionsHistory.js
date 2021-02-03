import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
    width: 900px;
    margin: 0 auto;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0px 0px 10px 0px rgba(216, 224, 234, 0.75);
`;

const TableTitle = styled.th`
    padding: 10px 0;
    background-color: #03bbd7;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
`;

const TableRow = styled.tr`
    &:nth-child(odd){
        background-color: #fff;
    }

    &:nth-child(even){
        background-color: #ecf1f4;
    }
`;

const TableCeil = styled.td`
    padding: 10px 0;
    color: #8a8a8a;
`;

function TransactionsHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCeil>{item.type}</TableCeil>
            <TableCeil>{item.amount}</TableCeil>
            <TableCeil>{item.currency}</TableCeil>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionsHistory;
