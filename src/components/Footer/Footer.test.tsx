import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component properly', () => {
  // Render the Header component
  const { container } = render(<Footer />);

  // Check if the Header component is rendered
  expect(container).not.toBeEmptyDOMElement();
});
