import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { GoldButton, GhostButton } from './Common';
import WaveDivider from './WaveDivider';

const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 2rem;
`;

const Eyebrow = styled.p`
  font-family: ${fonts.body};
  letter-spacing: 0.4em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${colors.goldBright};
  margin-bottom: 1.4rem;
`;

const Headline = styled.h1`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(3rem, 9vw, 7rem);
  line-height: 0.98;
  color: ${colors.paper};
  margin: 0;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
`;

const Sub = styled.p`
  font-family: ${fonts.body};
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  color: ${colors.paperDim};
  max-width: 560px;
  margin: 1.8rem 0 2.6rem;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Meta = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  justify-content: center;
  font-family: ${fonts.body};
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.paperDim};

  strong {
    color: ${colors.gold};
    display: block;
    font-size: 0.7rem;
    letter-spacing: 0.24em;
    margin-bottom: 0.3rem;
  }
`;

const Scroller = styled.div`
  position: absolute;
  bottom: 4.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 42px;
  border: 1px solid ${colors.glassBorder};
  border-radius: 999px;
  display: flex;
  justify-content: center;
  padding-top: 8px;

  &::after {
    content: '';
    width: 4px;
    height: 8px;
    border-radius: 999px;
    background: ${colors.gold};
    animation: dip 1.8s infinite ease-in-out;
  }

  @keyframes dip {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(10px); opacity: 0.3; }
  }
`;

const DividerWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Hero: React.FC = () => (
  <Wrap id="top">
    <Eyebrow>Karşıyaka · İzmir Körfezi</Eyebrow>
    <Headline>ZAZIZMIR</Headline>
    <Sub>
      Gün batarken havuz kenarında başlayan, gece canlı müzik ve DJ setleriyle
      devam eden bir körfez hikâyesi. Zazizmir; İzmir'in ışıklarına karşı
      kurulmuş, güneşin battığı yerden gecenin doğduğu yere bir geçiş.
    </Sub>
    <Actions>
      <GoldButton href="#rezervasyon">Masa Ayırt</GoldButton>
      <GhostButton href="#menu">Menüyü Keşfet</GhostButton>
    </Actions>
    <Meta>
      <div><strong>Gündüz</strong>Havuz &amp; Deniz Manzarası</div>
      <div><strong>Akşam</strong>Gün Batımı Kokteylleri</div>
      <div><strong>Gece</strong>Canlı Müzik &amp; DJ Set</div>
    </Meta>
    <Scroller aria-hidden />
    <DividerWrap>
      <WaveDivider />
    </DividerWrap>
  </Wrap>
);

export default Hero;
