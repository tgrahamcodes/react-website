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
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Programs/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Treatment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Insurance/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  test('buttons contain links to the correct routes', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    // Check that each button has the correct route link
    // expect(screen.getByRole('button', { name: /Home/i }).closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByRole('button', { name: /Programs/i }).closest('a')).toHaveAttribute('href', '/programs');
    expect(screen.getByRole('button', { name: /Treatment/i }).closest('a')).toHaveAttribute('href', '/treatment');
    expect(screen.getByRole('button', { name: /Insurance/i }).closest('a')).toHaveAttribute('href', '/insurance');
    expect(screen.getByRole('button', { name: /Contact/i }).closest('a')).toHaveAttribute('href', '/contact');
  });
});
