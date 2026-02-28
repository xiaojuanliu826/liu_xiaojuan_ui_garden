import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ $bg?: string; $disabled?: boolean }>`
  padding: 5px;
  background-color: ${({ $bg, $disabled }) => ($disabled ? 'grey' : $bg || 'transparent')};
  color: ${({ $disabled }) => ($disabled ? 'lightgrey' : 'black')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Text: React.FC<TextProps> = ({ content, backgroundColor, disabled = false }) => {
  return <StyledText $bg={backgroundColor} $disabled={disabled}>{content}</StyledText>;
};

export default Text;