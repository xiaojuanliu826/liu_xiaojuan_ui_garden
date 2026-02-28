import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  max-height: 400px;
  overflow: hidden;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    max-height: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div<{ backgroundColor?: string }>`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'rgba(0,0,0,0.5)'};
  padding: 10px 20px;
  border-radius: 8px;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  overlayText,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <Wrapper disabled={disabled} data-testid="heroimage">
      <Image src={src} alt={alt} />
      {overlayText && (
        <Overlay backgroundColor={backgroundColor}>
          {overlayText}
        </Overlay>
      )}
    </Wrapper>
  );
};

export default HeroImage;