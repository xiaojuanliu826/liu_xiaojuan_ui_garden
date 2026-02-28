import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 12px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#fafafa')};
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const TableFooter: React.FC<TableFooterProps> = ({
  label,
  colSpan,
  disabled = false,
}) => {
  return (
    <StyledTd colSpan={colSpan} disabled={disabled} data-testid="tablefooter">
      {label}
    </StyledTd>
  );
};

export default TableFooter;