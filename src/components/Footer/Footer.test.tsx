import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer page content', () => {
  // Render the Footer component
  render(<Footer />);
  
  // Check if the heading element is in the document
  const headingElement = screen.getByText(/2024 Aura Wellness. All rights reserved./i);

  expect(headingElement).toBeInTheDocument();
});
