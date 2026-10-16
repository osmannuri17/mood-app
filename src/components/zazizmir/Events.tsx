import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Glass } from './Common';
import { events, programWeek, reservationPhone } from '../../data/eventsData';

const List = styled.div`
  margin-top: 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled(Glass)`
  display: grid;
  grid-template-columns: 140px 1fr auto;
  align-items: center;
  gap: 1.4rem;
  padding: 1.3rem 1.6rem;
  font-family: ${fonts.body};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`;

const When = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (max-width: 760px) {
    flex-direction: row;
    align-items: baseline;
    gap: 0.6rem;
  }
`;

const DateText = styled.span`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 1.5rem;
  color: ${colors.paper};
`;

const Day = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.paperDim};
`;

const Subtitle = styled.span`
  display: block;
  margin: 0.15rem 0 0.3rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.goldBright};
`;

const Time = styled.span`
  font-size: 0.85rem;
  color: ${colors.paperDim};
`;

const Week = styled.span`
  display: inline-block;
  margin-top: 0.8rem;
  font-family: ${fonts.body};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.goldBright};
`;

const Phone = styled.p`
  margin: 1.8rem 0 0;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  color: ${colors.paperDim};

  a {
    color: ${colors.paper};
    font-weight: 700;
    text-decoration: none;
  }
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
      : p.$type === 'Canlı Müzik' || p.$type === 'Akustik'
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
      <Title>Bu hafta ZAZ'da buluşmak için bir nedeniniz var!</Title>
      <Week>{programWeek}</Week>
      <List>
        {events.map((e) => (
          <Row key={e.date}>
            <When>
              <DateText>{e.date}</DateText>
              <Day>{e.day}</Day>
            </When>
            <Info>
              <h4>{e.title}</h4>
              {e.subtitle && <Subtitle>{e.subtitle}</Subtitle>}
              {e.desc && <p>{e.desc}</p>}
              {e.dinner && e.music && (
                <Time>
                  {e.dinner} Yemek · {e.music} Müzik
                </Time>
              )}
            </Info>
            <Badge $type={e.type}>{e.type}</Badge>
          </Row>
        ))}
      </List>
      <Phone>
        Rezervasyon:{' '}
        <a href={`tel:${reservationPhone.replace(/\s/g, '')}`}>{reservationPhone}</a>
      </Phone>
    </SectionInner>
  </Section>
);

export default Events;
