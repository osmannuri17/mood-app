import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede, Glass } from './Common';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 2.5rem;
  align-items: stretch;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const InfoPanel = styled(Glass)`
  padding: 2.2rem;
  font-family: ${fonts.body};
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid ${colors.glassBorder};

  &:last-child {
    border-bottom: none;
  }

  strong {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${colors.gold};
    margin-bottom: 0.25rem;
  }

  span {
    color: ${colors.paperDim};
    font-size: 0.94rem;
  }
`;

const MapPanel = styled(Glass)`
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(47, 213, 201, 0.16), rgba(232, 183, 76, 0.12));
`;

const Pin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  z-index: 1;

  span {
    font-family: ${fonts.body};
    font-size: 0.85rem;
    color: ${colors.paperDim};
    text-align: center;
    max-width: 220px;
  }
`;

const PinDot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${colors.gold};
  box-shadow: 0 0 0 8px rgba(232, 183, 76, 0.18), 0 0 0 16px rgba(232, 183, 76, 0.08);
`;

const Ripple = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, ${colors.glassBorder} 1px, transparent 1px);
  background-size: 26px 26px;
  opacity: 0.5;
`;

const Location: React.FC = () => (
  <Section id="konum">
    <SectionInner>
      <Eyebrow>Konum</Eyebrow>
      <Title>Karşıyaka'nın körfeze bakan yüzü</Title>
      <Lede>İzmir'in gün batımıyla ünlü sahil şeridinde, Kordon ve Alsancak'a bakan bir noktada.</Lede>
      <Grid>
        <InfoPanel>
          <Row>
            <div>
              <strong>Adres</strong>
              <span>Bostanlı Sahili, Karşıyaka / İzmir (kesin adres yakında)</span>
            </div>
          </Row>
          <Row>
            <div>
              <strong>Çalışma Saatleri</strong>
              <span>Her gün 11:00 — 02:00</span>
            </div>
          </Row>
          <Row>
            <div>
              <strong>Ulaşım</strong>
              <span>Bostanlı İskelesi'ne 5 dakika yürüme mesafesi, vapur ve tramvay bağlantılı</span>
            </div>
          </Row>
          <Row>
            <div>
              <strong>İletişim</strong>
              <span>+90 (232) 000 00 00 · info@zazizmir.com</span>
            </div>
          </Row>
        </InfoPanel>
        <MapPanel>
          <Ripple />
          <Pin>
            <PinDot />
            <span>Harita entegrasyonu (Google Maps) mekân netleştikten sonra buraya eklenecek.</span>
          </Pin>
        </MapPanel>
      </Grid>
    </SectionInner>
  </Section>
);

export default Location;
