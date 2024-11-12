import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import CyberSecurity from './CyberSecurity';

test('renders Cyber Security page content', () => {
  act(() => {
    render(<CyberSecurity />);
  });

  // Check if the heading and paragraph are in the document
  const headingElement = screen.getByText(/Cyber Security Page/i);
  const paragraphElement = screen.getByText(/Welcome to the Cyber Security page/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('sets the document title', () => {
  act(() => {
    render(<CyberSecurity />);
  });

  expect(document.title).toBe('Cyber Security');
});
