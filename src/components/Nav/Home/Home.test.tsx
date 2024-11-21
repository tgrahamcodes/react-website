import { render } from '@testing-library/react';
import Home from './Home'

test('sets the Home page title', () => {
  render(<Home />);

  expect(document.title).toBe('Home');
});
