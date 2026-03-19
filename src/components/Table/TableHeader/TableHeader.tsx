import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTh = styled.th<{ disabled?: boolean }>`
  padding: 12px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#f5f5f5')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  disabled = false,
}) => {
  return (
    <StyledTh disabled={disabled} data-testid="tableheader">
      {label}
    </StyledTh>
  );
};

export default TableHeader;
