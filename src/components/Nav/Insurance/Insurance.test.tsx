import { render } from '@testing-library/react';
import Insurance from './Insurance';

test('sets the document title', () => {
  render(<Insurance />);
  
  expect(document.title).toBe('Insurance');
});
