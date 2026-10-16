import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Zazizmir hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /ZAZIZMIR/i });
  expect(heading).toBeInTheDocument();
});
