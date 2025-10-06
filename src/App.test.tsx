import { render, screen } from '@testing-library/react';

import App from './App';

test('renders app correctly', () => {
  render(<App />);

  expect(screen.getByText('Awesome Bank')).toBeInTheDocument();
});

test('/* add your test case description here */', () => {});
