import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $disabled?: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} $disabled={disabled} />;
};

export default Img;