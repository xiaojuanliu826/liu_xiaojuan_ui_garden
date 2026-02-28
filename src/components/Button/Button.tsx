import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $bg?: string; $disabled?: boolean }>`
  padding: 10px 20px;
  width: 100%;
  background-color: ${({ $bg, $disabled }) => ($disabled ? 'grey' : $bg || 'blue')};
  color: white;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, backgroundColor, disabled = false }) => {
  return <StyledButton $bg={backgroundColor} $disabled={disabled}>{label}</StyledButton>;
};

export default Button;