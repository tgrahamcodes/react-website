import { render, screen } from '@testing-library/react';
import Treatment from './Treatment';

test('sets the document title', () => {
  render(<Treatment />);

  expect(document.title).toBe('Treatment');
});
