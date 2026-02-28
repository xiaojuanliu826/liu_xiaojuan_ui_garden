import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $disabled?: boolean; $bg?: string }>`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? 'grey' : $bg || 'transparent'};
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'pointer'};

  @media (min-width: 768px) {
    padding: 8px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <Wrapper $disabled={disabled} $bg={backgroundColor}>
      <input type="radio" disabled={disabled} />
      {label}
    </Wrapper>
  );
};

export default RadioButton;