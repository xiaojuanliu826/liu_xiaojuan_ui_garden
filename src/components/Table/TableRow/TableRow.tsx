import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'transparent')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  td {
    border: 1px solid #ddd;
    padding: 12px;
    background-color: ${({ disabled }) => (disabled ? '#eee' : '#fff')};
    cursor: ${({ disabled }) =>
      disabled ? 'not-allowed' : 'default'}; // ✅加上这里
  }
`;

const TableRow: React.FC<TableRowProps> = ({ disabled = false, children }) => {
  return <StyledTr disabled={disabled}>{children}</StyledTr>;
};

export default TableRow;
