import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav Component', () => {
  test('renders navigation buttons with correct text', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check if each button is present with the correct text
    expect(screen.getByRole('button', { name: /Software Development/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cyber Security/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Art/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Graphic Design/i })).toBeInTheDocument();
  });

  test('buttons contain links to the correct routes', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check that each button has the correct route link
    expect(screen.getByRole('button', { name: /Software Development/i }).closest('a')).toHaveAttribute('href', '/software-development');
    expect(screen.getByRole('button', { name: /Cyber Security/i }).closest('a')).toHaveAttribute('href', '/cyber-security');
    expect(screen.getByRole('button', { name: /Art/i }).closest('a')).toHaveAttribute('href', '/art');
    expect(screen.getByRole('button', { name: /Graphic Design/i }).closest('a')).toHaveAttribute('href', '/graphic-design');
  });
});
