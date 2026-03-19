import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ $bg?: string; $disabled?: boolean }>`
  padding: 5px 10px;
  display: inline-block;
  background-color: ${({ $bg, $disabled }) =>
    $disabled ? 'grey' : $bg || 'transparent'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  color: ${({ $disabled }) => ($disabled ? 'lightgrey' : 'black')};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledLabel $bg={backgroundColor} $disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
