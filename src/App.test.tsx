import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Aura Wellness link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleElement = screen.getByTitle(/Aura Wellness/i);
  console.log("0000000000000000000000", titleElement)
  expect(titleElement).toBeInTheDocument();
});
