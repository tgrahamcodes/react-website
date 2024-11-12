import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import Art from './Art';

test('renders Cyber Security page content', () => {
  act(() => {
    render(<Art />);
  });

  // Check if the heading and paragraph are in the document
  const headingElement = screen.getByText(/Art Page/i);
  const paragraphElement = screen.getByText(/Welcome to the Art page/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('sets the document title', () => {
  act(() => {
    render(<Art />);
  });

  expect(document.title).toBe('Art');
});
