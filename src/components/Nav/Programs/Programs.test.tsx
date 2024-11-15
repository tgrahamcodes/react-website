import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import Programs from './Programs';

test('sets the document title', () => {
  render(<Programs />);

  expect(document.title).toBe('Programs');
});
