import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import GraphicDesign from './GraphicDesign';

test('renders Cyber Security page content', () => {
  act(() => {
    render(<GraphicDesign />);
  });

  // Check if the heading and paragraph are in the document
  const headingElement = screen.getByText(/Graphic Design Page/i);
  const paragraphElement = screen.getByText(/Welcome to the Graphic Design page/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('sets the document title', () => {
  act(() => {
    render(<GraphicDesign />);
  });

  expect(document.title).toBe('Graphic Design');
});
