import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { skyStops } from '../../theme';

function hexToRgb(hex: string) {
  const v = hex.replace('#', '');
  const num = parseInt(v, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mixHex(hexA: string, hexB: string, t: number) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(lerp(a.r, b.r, t));
  const g = Math.round(lerp(a.g, b.g, t));
  const bl = Math.round(lerp(a.b, b.b, t));
  return `rgb(${r}, ${g}, ${bl})`;
}

function colorAt(progress: number, index: 0 | 1) {
  const p = Math.min(1, Math.max(0, progress));
  for (let i = 0; i < skyStops.length - 1; i++) {
    const [t0, top0, bottom0] = skyStops[i];
    const [t1, top1, bottom1] = skyStops[i + 1];
    if (p >= t0 && p <= t1) {
      const local = (p - t0) / (t1 - t0 || 1);
      return index === 0 ? mixHex(top0, top1, local) : mixHex(bottom0, bottom1, local);
    }
  }
  const last = skyStops[skyStops.length - 1];
  return index === 0 ? last[1] : last[2];
}

const Fixed = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  overflow: hidden;
`;

const Orb = styled.div`
  position: absolute;
  left: 50%;
  width: 46vmin;
  height: 46vmin;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(1px);
`;

const Sparkles = styled.div`
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
`;

const Speck = styled.div<{ x: number; y: number; size: number }>`
  position: absolute;
  left: ${(p) => p.x}%;
  top: ${(p) => p.y}%;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 50%;
  background: #fff;
`;

const SkyBackground: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const top = colorAt(progress, 0);
  const bottom = colorAt(progress, 1);

  // The orb reads as the sun for the first half of the page (pool by day),
  // then dissolves into a warm moon/stage-light glow for the music sections.
  const orbY = 14 + progress * 78;
  const orbGlow = mixHex('#FFE8B0', '#E8B74C', Math.min(1, progress * 1.4));
  const orbOpacity = 1 - Math.max(0, progress - 0.75) * 3.2;

  const specks = useRef(
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
    }))
  ).current;

  return (
    <Fixed style={{ background: `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)` }}>
      <Orb
        style={{
          top: `${orbY}%`,
          opacity: Math.max(0, orbOpacity),
          background: `radial-gradient(circle at 40% 35%, #FFF7E0 0%, ${orbGlow} 45%, transparent 72%)`,
          boxShadow: `0 0 12vmin 4vmin ${orbGlow}55`,
        }}
      />
      <Sparkles style={{ opacity: Math.min(1, progress * 1.6) }}>
        {specks.map((s, i) => (
          <Speck key={i} x={s.x} y={s.y} size={s.size} style={{ opacity: 0.15 + (i % 5) * 0.15 }} />
        ))}
      </Sparkles>
    </Fixed>
  );
};

export default SkyBackground;
