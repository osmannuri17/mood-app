import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../theme';

const Bar = styled.header<{ $solid: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 2rem;
  background: ${(p) => (p.$solid ? 'rgba(10, 8, 20, 0.55)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$solid ? 'blur(14px)' : 'none')};
  border-bottom: 1px solid ${(p) => (p.$solid ? colors.glassBorder : 'transparent')};
  transition: background 0.3s ease, border-color 0.3s ease;

  @media (max-width: 720px) {
    padding: 1rem 1.25rem;
  }
`;

const Logo = styled.a`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.04em;
  color: ${colors.paper};
  text-decoration: none;

  span {
    color: ${colors.gold};
  }
`;

const Links = styled.nav`
  display: flex;
  gap: 1.9rem;
  font-family: ${fonts.body};
  font-size: 0.88rem;
  font-weight: 600;

  a {
    color: ${colors.paperDim};
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${colors.gold};
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const CtaLink = styled.a`
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 0.85rem;
  color: ${colors.ink};
  background: linear-gradient(135deg, ${colors.goldBright}, ${colors.gold});
  padding: 0.55rem 1.3rem;
  border-radius: 999px;
  text-decoration: none;
`;

const NAV_ITEMS = [
  { href: '#konsept', label: 'Konsept' },
  { href: '#deneyim', label: 'Deneyim' },
  { href: '#menu', label: 'Menü' },
  { href: '#etkinlikler', label: 'Etkinlikler' },
  { href: '#konum', label: 'Konum' },
];

const Navbar: React.FC = () => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $solid={solid}>
      <Logo href="#top">ZAZI<span>ZMIR</span></Logo>
      <Links>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </Links>
      <CtaLink href="#rezervasyon">Rezervasyon</CtaLink>
    </Bar>
  );
};

export default Navbar;
