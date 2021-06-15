import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('test fail', () => {
  expect(false).toBe(true);
});
*/

test('renders Hello World!!! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World!!!/i);
  expect(linkElement).toBeInTheDocument();
});
