import React from 'react';
import styled from 'styled-components';

import { getFontSize } from '../helpers'

const tableBlue = '#E0F3FC';
const genesysOrange = '#F69337';

const TableComponent = styled.table`
  width: 100%;
  font-size: ${getFontSize(2)};
  color: black;
`

const TableHeader = styled.th`
  color: white;
  background-color: ${genesysOrange};
`

const Table = ({ columns, rows, rowClass, eventData }) => {
  const tableColumns = columns ? (
    <tr>
      {columns.map((col, i) => {
        return (
          <TableHeader style={{ width: window.innerWidth > 800 && col.width }} className={col.align ? 'text-' + col.align : ''} key={i}>
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
