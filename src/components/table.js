import React from 'react';
import styled from 'styled-components';

import useWidth from '../hooks/useWidth'

import { getFontSize } from '../helpers'

const tableBlue = '#E0F3FC';
const genesysOrange = '#F69337';

const Table = ({ columns, rows, rowClass, eventData }) => {
  const wide = useWidth();

  const TableComponent = styled.table`
    width: 100%;
    font-size: ${getFontSize(2, wide)};
    color: black;
  `

  const TableHeader = styled.th`
    color: white;
    background-color: ${genesysOrange};
    text-align: left;
  `

  const tableColumns = columns ? (
    <tr>
      {columns.map((col, i) => {
        return (
          <TableHeader style={{ width: wide && col.width }} className={col.align ? 'text-' + col.align : ''} key={i}>
            {col.title || ''}
          </TableHeader>
        );
      })}
    </tr>
  ) : null;

  const tableBody = rows.map((row, r) => {

    return (
      <tr key={r} style={{ backgroundColor: r % 2 ? 'white' : tableBlue }}>
        {row.values.map((td, i) => {

          return (
            <td
              key={i}
            >
              <div>
                {td}
              </div>
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <TableComponent>
      <thead>{tableColumns}</thead>
      <tbody>{tableBody}</tbody>
    </TableComponent>
  );
};

export default Table;
