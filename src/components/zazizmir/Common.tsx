import styled from 'styled-components';
import { colors, fonts } from '../../theme';

export const Section = styled.section`
  position: relative;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    padding: 4.5rem 1.25rem;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: 1120px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${fonts.body};
  font-size: 0.78rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${colors.gold};
  font-weight: 700;

  &::before {
    content: '';
    width: 28px;
    height: 1px;
    background: ${colors.gold};
  }
`;

export const Title = styled.h2`
  font-family: ${fonts.display};
  font-weight: 600;
  font-size: clamp(2.1rem, 4.5vw, 3.4rem);
  color: ${colors.paper};
  margin: 0.7rem 0 1rem;
  line-height: 1.08;
`;

export const Lede = styled.p`
  font-family: ${fonts.body};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${colors.paperDim};
  max-width: 620px;
`;

export const Glass = styled.div`
  background: ${colors.glassLight};
  border: 1px solid ${colors.glassBorder};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 22px;
`;

export const GoldButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.95rem 2rem;
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  color: ${colors.ink};
  background: linear-gradient(135deg, ${colors.goldBright}, ${colors.gold});
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 12px 30px -10px rgba(232, 183, 76, 0.65);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px -8px rgba(232, 183, 76, 0.8);
  }
`;

export const GhostButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.9rem;
  font-family: ${fonts.body};
  font-weight: 600;
  font-size: 0.92rem;
  color: ${colors.paper};
  border: 1px solid ${colors.glassBorder};
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${colors.gold};
  }
`;
