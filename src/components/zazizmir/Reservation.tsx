import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede, Glass, GoldButton } from './Common';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 3rem;
  margin-top: 2.5rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const FormPanel = styled(Glass)`
  padding: 2.2rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.1rem;

  label {
    font-family: ${fonts.body};
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.gold};
  }

  input,
  textarea {
    font-family: ${fonts.body};
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid ${colors.glassBorder};
    border-radius: 10px;
    padding: 0.75rem 0.9rem;
    color: ${colors.paper};
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: ${colors.gold};
    }

    &::placeholder {
      color: rgba(255, 246, 234, 0.4);
    }
  }

  textarea {
    resize: vertical;
    min-height: 90px;
  }
`;

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled(GoldButton).attrs({ as: 'button' })`
  width: 100%;
  justify-content: center;
  margin-top: 0.4rem;
`;

const Confirmed = styled.p`
  font-family: ${fonts.body};
  color: ${colors.teal};
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Reservation: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="rezervasyon">
      <SectionInner>
        <Eyebrow>Rezervasyon</Eyebrow>
        <Title>Gün batımına yer ayırt</Title>
        <Grid>
          <Lede>
            Havuz kenarında bir masa, sahneye yakın bir loca ya da DJ setinin
            tam karşısında bir köşe — talebinizi iletin, ekibimiz sizinle
            iletişime geçsin. (Bu form şimdilik demo amaçlıdır, canlıya
            alınırken bir rezervasyon servisine bağlanacaktır.)
          </Lede>
          <FormPanel>
            <form onSubmit={handleSubmit}>
              <Row2>
                <Field>
                  <label htmlFor="name">Ad Soyad</label>
                  <input id="name" placeholder="Adınız" required />
                </Field>
                <Field>
                  <label htmlFor="phone">Telefon</label>
                  <input id="phone" placeholder="05xx xxx xx xx" required />
                </Field>
              </Row2>
              <Row2>
                <Field>
                  <label htmlFor="date">Tarih</label>
                  <input id="date" type="date" required />
                </Field>
                <Field>
                  <label htmlFor="guests">Kişi Sayısı</label>
                  <input id="guests" type="number" min={1} placeholder="2" required />
                </Field>
              </Row2>
              <Field>
                <label htmlFor="note">Not</label>
                <textarea id="note" placeholder="Özel istek: havuz kenarı, sahne önü, doğum günü..." />
              </Field>
              <SubmitButton type="submit">Rezervasyon Talebi Gönder</SubmitButton>
              {sent && <Confirmed>Talebiniz alındı — ekibimiz en kısa sürede dönüş yapacak.</Confirmed>}
            </form>
          </FormPanel>
        </Grid>
      </SectionInner>
    </Section>
  );
};

export default Reservation;
