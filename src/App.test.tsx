import { render } from '@testing-library/react';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('sets the document title', () => {
  act(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  expect(document.title).toBe('Aura Wellness');
});
