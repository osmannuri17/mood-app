// Zazizmir — shared design tokens
// Concept: the Karşıyaka waterfront sky over the Gulf of İzmir, moving from
// golden pool afternoons into coral sunsets and finally into a live-music,
// gold-lit night. Every screen uses the same sun/night palette so the whole
// site reads as one continuous "day into night" arc.

export const colors = {
  gold: '#E8B74C',
  goldBright: '#FFD98A',
  coral: '#FF8368',
  sunset: '#C1447E',
  dusk: '#5B2E83',
  ink: '#0B0A17',
  inkDeep: '#050410',
  paper: '#FFF6EA',
  paperDim: 'rgba(255, 246, 234, 0.72)',
  teal: '#2FD5C9',
  glassLight: 'rgba(255, 255, 255, 0.10)',
  glassBorder: 'rgba(255, 255, 255, 0.22)',
};

export const fonts = {
  display: "'Fraunces', 'Georgia', serif",
  body: "'Manrope', 'Segoe UI', sans-serif",
};

// Gradient stops used by the fixed scroll-driven sky background.
// Each stop = [scrollFraction, topColor, bottomColor]
export const skyStops: Array<[number, string, string]> = [
  [0, '#FCE7C8', '#FDBE87'],
  [0.22, '#FBAE79', '#FF8368'],
  [0.45, '#E4657F', '#8E3A79'],
  [0.68, '#5B2E83', '#2A1B54'],
  [1, '#0F0B24', '#050410'],
];
