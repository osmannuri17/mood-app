import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede, Glass } from './Common';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2.5rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Panel = styled(Glass)`
  padding: 2.4rem;
  font-family: ${fonts.body};
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.85rem 0;
  border-bottom: 1px solid ${colors.glassBorder};
  color: ${colors.paper};
  font-size: 0.95rem;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    color: ${colors.paperDim};
  }

  span:last-child {
    color: ${colors.goldBright};
    font-weight: 700;
  }
`;

const Concept: React.FC = () => (
  <Section id="konsept">
    <SectionInner>
      <Eyebrow>Konsept</Eyebrow>
      <Title>Bir gün batımı iki farklı hâl</Title>
      <Grid>
        <Lede>
          Karşıyaka'nın körfeze bakan kıyısında, İzmir'in ikonik gün batımını
          bir arada yaşatan bir mekân kuruyoruz: Zazizmir. Gündüz, havuz
          kenarında körfezin ve karşı yakadaki Kordon ışıklarının manzarasıyla
          ağır bir tempo; gece ise sahnenin ve DJ setinin yönettiği enerjik bir
          akış. İki hâl, tek bir mekânda, aynı ufuk çizgisine bakarak birleşiyor.
          <br /><br />
          Zazizmir ismi kasıtlı olarak oyunbaz: yerelin ("Zazi") sıcaklığıyla
          şehrin ("İzmir") kozmopolit ritmini aynı çatı altında topluyor —
          menüden müziğe kadar her detay bu iki kimliğin karışımından besleniyor.
        </Lede>
        <Panel>
          <Line><span>Konum</span><span>Karşıyaka, İzmir</span></Line>
          <Line><span>Manzara</span><span>İzmir Körfezi</span></Line>
          <Line><span>Gündüz</span><span>Havuz Kulübü</span></Line>
          <Line><span>Gece</span><span>Canlı Müzik / DJ</span></Line>
          <Line><span>Mutfak</span><span>Ege Füzyon</span></Line>
        </Panel>
      </Grid>
    </SectionInner>
  </Section>
);

export default Concept;
