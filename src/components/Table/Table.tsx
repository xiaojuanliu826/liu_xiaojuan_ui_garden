import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  /* 让 tr/td 内部也继承 disabled 样式 */
  tr,
  td {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : 'transparent')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  }

  td {
    padding: 8px;
    border: 1px solid #ddd;
  }
`;

const Table: React.FC<TableProps> = ({
  children,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledTable
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table"
    >
      {children}
    </StyledTable>
  );
};

export default Table;
