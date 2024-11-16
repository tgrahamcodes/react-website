import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header component properly', () => {
  // Render the Header component
  const { container } = render(<Header />);

  // Check if the Header component is rendered
  expect(container).not.toBeEmptyDOMElement();
});
