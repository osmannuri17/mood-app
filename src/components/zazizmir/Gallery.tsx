import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede } from './Common';

const Grid = styled.div`
  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 160px;
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Tile = styled.div<{ $gradient: string; $span?: string }>`
  border-radius: 18px;
  background: ${(p) => p.$gradient};
  grid-column: ${(p) => p.$span ?? 'span 1'};
  grid-row: span 1;
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.glassBorder};
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.45) 100%);
  }
`;

const Label = styled.span`
  position: relative;
  z-index: 1;
  font-family: ${fonts.body};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${colors.paper};
`;

const TILES: Array<{ label: string; gradient: string; span?: string }> = [
  { label: 'Infinity Havuz · Körfez Manzarası', gradient: 'linear-gradient(140deg, #FDE3B5, #FF9A6C)', span: 'span 2' },
  { label: 'Gün Batımı Kokteylleri', gradient: 'linear-gradient(140deg, #FF8368, #C1447E)' },
  { label: 'Canlı Sahne', gradient: 'linear-gradient(140deg, #8E3A79, #3B2168)' },
  { label: 'DJ Booth', gradient: 'linear-gradient(140deg, #5B2E83, #1B1035)' },
  { label: 'Şef Menüsü', gradient: 'linear-gradient(140deg, #E8B74C, #C1447E)' },
  { label: 'Karşıyaka Sahili — Gece', gradient: 'linear-gradient(140deg, #241654, #050410)', span: 'span 2' },
];

const Gallery: React.FC = () => (
  <Section id="galeri">
    <SectionInner>
      <Eyebrow>Galeri</Eyebrow>
      <Title>Bir bakışta Zazizmir</Title>
      <Lede>Gerçek mekân fotoğrafları çekildikçe bu alan güncellenecek — şimdilik atmosferin renk paletini gösteriyoruz.</Lede>
      <Grid>
        {TILES.map((t) => (
          <Tile key={t.label} $gradient={t.gradient} $span={t.span}>
            <Label>{t.label}</Label>
          </Tile>
        ))}
      </Grid>
    </SectionInner>
  </Section>
);

export default Gallery;
