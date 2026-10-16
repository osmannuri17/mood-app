import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede, Glass } from './Common';
import { events } from '../../data/eventsData';

const List = styled.div`
  margin-top: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled(Glass)`
  display: grid;
  grid-template-columns: 140px 140px 1fr auto;
  align-items: center;
  gap: 1.4rem;
  padding: 1.3rem 1.6rem;
  font-family: ${fonts.body};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`;

const Day = styled.span`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 1.15rem;
  color: ${colors.paper};
`;

const Time = styled.span`
  font-size: 0.85rem;
  color: ${colors.paperDim};
`;

const Info = styled.div`
  h4 {
    margin: 0 0 0.2rem;
    font-family: ${fonts.display};
    font-size: 1.05rem;
    font-weight: 600;
    color: ${colors.paper};
  }
  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${colors.paperDim};
  }
`;

const Badge = styled.span<{ $type: string }>`
  justify-self: end;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  color: ${(p) => (p.$type === 'DJ Set' ? colors.ink : colors.paper)};
  background: ${(p) =>
    p.$type === 'DJ Set'
      ? `linear-gradient(135deg, ${colors.goldBright}, ${colors.gold})`
      : p.$type === 'Canlı Müzik'
      ? `linear-gradient(135deg, ${colors.coral}, ${colors.sunset})`
      : `linear-gradient(135deg, ${colors.teal}, #1ea89d)`};

  @media (max-width: 760px) {
    justify-self: start;
  }
`;

const Events: React.FC = () => (
  <Section id="etkinlikler">
    <SectionInner>
      <Eyebrow>Haftalık Program</Eyebrow>
      <Title>Sahne her akşam değişiyor</Title>
      <Lede>Canlı performanslardan konuk DJ setlerine, hafta boyunca farklı bir ritim.</Lede>
      <List>
        {events.map((e, i) => (
          <Row key={i}>
            <Day>{e.day}</Day>
            <Time>{e.time}</Time>
            <Info>
              <h4>{e.title}</h4>
              <p>{e.desc}</p>
            </Info>
            <Badge $type={e.type}>{e.type}</Badge>
          </Row>
        ))}
      </List>
    </SectionInner>
  </Section>
);

export default Events;
