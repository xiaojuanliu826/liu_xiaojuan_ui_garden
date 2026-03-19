import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ $bg?: string; $disabled?: boolean }>`
  padding: 8px;
  width: 100%;
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? 'grey' : $bg || 'white'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledSelect
      $bg={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
