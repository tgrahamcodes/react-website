import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header page content', () => {
  // Render the Header component
  render(<Header />);

  // Check if the heading is in the document
  const headingElement = screen.getByText("Home");
  expect(headingElement).toBeInTheDocument();
});
