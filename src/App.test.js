import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test fail', () => {
  expect(false).toBe(true);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
