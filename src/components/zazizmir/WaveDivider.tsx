import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div<{ $flip?: boolean }>`
  position: relative;
  width: 100%;
  line-height: 0;
  transform: ${(p) => (p.$flip ? 'scaleY(-1)' : 'none')};

  svg {
    display: block;
    width: 100%;
    height: 70px;
  }
`;

const WaveDivider: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <Wrap $flip={flip}>
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
      <path
        d="M0,32 C150,80 350,0 600,32 C850,64 1050,8 1200,40 L1200,80 L0,80 Z"
        fill="rgba(255,255,255,0.06)"
      />
      <path
        d="M0,50 C150,10 350,90 600,50 C850,20 1050,70 1200,44 L1200,80 L0,80 Z"
        fill="rgba(255,255,255,0.03)"
      />
    </svg>
  </Wrap>
);

export default WaveDivider;
