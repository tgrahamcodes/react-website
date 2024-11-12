import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import SoftwareDevelopment from './SoftwareDevelopment';

test('renders Cyber Security page content', () => {
  act(() => {
    render(<SoftwareDevelopment />);
  });

  // Check if the heading and paragraph are in the document
  const headingElement = screen.getByText(/Software Development Page/i);
  const paragraphElement = screen.getByText(/Welcome to the Software Development page/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('sets the document title', () => {
  act(() => {
    render(<SoftwareDevelopment />);
  });

  expect(document.title).toBe('Software Development');
});
