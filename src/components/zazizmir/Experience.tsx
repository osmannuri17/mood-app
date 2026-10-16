import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title } from './Common';
import { Glass } from './Common';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-top: 2.8rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Glass)`
  padding: 2.2rem 1.8rem;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${colors.gold};
  }
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background: linear-gradient(135deg, ${colors.goldBright}33, ${colors.coral}33);
  border: 1px solid ${colors.glassBorder};
  margin-bottom: 1.3rem;
`;

const CardTitle = styled.h3`
  font-family: ${fonts.display};
  font-size: 1.35rem;
  font-weight: 600;
  color: ${colors.paper};
  margin: 0 0 0.6rem;
`;

const CardText = styled.p`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.65;
  color: ${colors.paperDim};
  margin: 0;
`;

const Tag = styled.span`
  display: inline-block;
  margin-top: 1.1rem;
  font-family: ${fonts.body};
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: ${colors.gold};
`;

const ITEMS = [
  {
    icon: '🏊',
    tag: '12:00 — 19:00',
    title: 'Havuz & Deniz Manzarası',
    text: 'Körfeze sıfır infinity havuz, şezlong servisi ve gündüz DJ setleriyle sakin ama canlı bir öğleden sonra.',
  },
  {
    icon: '🎷',
    tag: 'Perşembe & Cuma',
    title: 'Canlı Müzik',
    text: 'Caz üçlülerinden akustik gitara, gün batımı saatinde sahneyi canlı performanslar dolduruyor.',
  },
  {
    icon: '🎧',
    tag: 'Cuma & Cumartesi',
    title: 'DJ Nights',
    text: 'Gece 23:00’den sonra sahneyi misafir DJ’lere bırakıyoruz — deep house ve organik elektronik setler.',
  },
];

const Experience: React.FC = () => (
  <Section id="deneyim">
    <SectionInner>
      <Eyebrow>Deneyim</Eyebrow>
      <Title>Günün her saatine ayrı bir sahne</Title>
      <Grid>
        {ITEMS.map((item) => (
          <Card key={item.title}>
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.text}</CardText>
            <Tag>{item.tag}</Tag>
          </Card>
        ))}
      </Grid>
    </SectionInner>
  </Section>
);

export default Experience;
