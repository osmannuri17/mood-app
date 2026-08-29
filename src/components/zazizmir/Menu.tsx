import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';
import { Section, SectionInner, Eyebrow, Title, Lede } from './Common';
import { menu } from '../../data/menuData';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Note = styled.span`
  font-family: ${fonts.body};
  font-size: 0.78rem;
  color: ${colors.paperDim};
  font-style: italic;
  max-width: 260px;
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 2.4rem 0 2rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  font-family: ${fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 0.65rem 1.3rem;
  border-radius: 999px;
  cursor: pointer;
  border: 1px solid ${(p) => (p.$active ? colors.gold : colors.glassBorder)};
  background: ${(p) => (p.$active ? 'linear-gradient(135deg, #FFD98A, #E8B74C)' : 'transparent')};
  color: ${(p) => (p.$active ? colors.ink : colors.paperDim)};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.gold};
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 3rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px dashed ${colors.glassBorder};
`;

const ItemInfo = styled.div`
  h4 {
    font-family: ${fonts.display};
    font-size: 1.08rem;
    font-weight: 600;
    color: ${colors.paper};
    margin: 0 0 0.3rem;
  }
  p {
    font-family: ${fonts.body};
    font-size: 0.85rem;
    color: ${colors.paperDim};
    margin: 0;
  }
`;

const Price = styled.span`
  font-family: ${fonts.body};
  font-weight: 700;
  color: ${colors.goldBright};
  white-space: nowrap;
`;

const Menu: React.FC = () => {
  const [active, setActive] = useState(menu[0].key);
  const category = menu.find((c) => c.key === active) ?? menu[0];

  return (
    <Section id="menu">
      <SectionInner>
        <Head>
          <div>
            <Eyebrow>Menü</Eyebrow>
            <Title>Deniz ile ateşin buluştuğu sofra</Title>
            <Lede>
              Aşağıdaki liste konseptin ilk taslağı — tatlar, isimler ve fiyatlar
              şeflerimizle birlikte netleştirilecek.
            </Lede>
          </div>
          <Note>* Menü kalemleri örnek/taslak niteliğindedir, ilerleyen aşamada güncellenecektir.</Note>
        </Head>
        <Tabs>
          {menu.map((c) => (
            <Tab key={c.key} $active={c.key === active} onClick={() => setActive(c.key)}>
              {c.label}
            </Tab>
          ))}
        </Tabs>
        <List>
          {category.items.map((item) => (
            <Item key={item.name}>
              <ItemInfo>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </ItemInfo>
              <Price>{item.price}</Price>
            </Item>
          ))}
        </List>
      </SectionInner>
    </Section>
  );
};

export default Menu;
