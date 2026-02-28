import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $bg?: string; $disabled?: boolean }>`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ $disabled, $bg }) =>
    $disabled ? 'grey' : $bg || 'white'};
  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'default'};
  width: 100%;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledCard $bg={backgroundColor} $disabled={disabled}>
      {children}
    </StyledCard>
  );
};

export default Card;