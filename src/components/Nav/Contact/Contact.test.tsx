import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('sets the Contact page title', () => {
  render(<Contact />);

  expect(document.title).toBe('Contact');
});
