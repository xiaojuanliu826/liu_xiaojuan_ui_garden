import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 12px;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? '#eee' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const TableCell: React.FC<TableCellProps> = ({ value, disabled = false }) => {
  return (
    <StyledTd disabled={disabled} data-testid="tablecell">
      {value}
    </StyledTd>
  );
};

export default TableCell;
