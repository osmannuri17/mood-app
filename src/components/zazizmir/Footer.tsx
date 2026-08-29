import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';

const Wrap = styled.footer`
  position: relative;
  padding: 3.5rem 1.5rem 2.5rem;
  border-top: 1px solid ${colors.glassBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  text-align: center;
`;

const Logo = styled.span`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 1.4rem;
  color: ${colors.paper};

  span {
    color: ${colors.gold};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1.6rem;
  font-family: ${fonts.body};
  font-size: 0.85rem;

  a {
    color: ${colors.paperDim};
    text-decoration: none;
  }
  a:hover {
    color: ${colors.gold};
  }
`;

const Fine = styled.p`
  font-family: ${fonts.body};
  font-size: 0.78rem;
  color: rgba(255, 246, 234, 0.45);
  margin: 0;
`;

const Footer: React.FC = () => (
  <Wrap>
    <Logo>ZAZI<span>ZMIR</span></Logo>
    <Links>
      <a href="#konsept">Konsept</a>
      <a href="#menu">Menü</a>
      <a href="#etkinlikler">Etkinlikler</a>
      <a href="#konum">Konum</a>
      <a href="#rezervasyon">Rezervasyon</a>
    </Links>
    <Fine>© {new Date().getFullYear()} Zazizmir · Karşıyaka, İzmir — Tüm hakları saklıdır.</Fine>
  </Wrap>
);

export default Footer;
