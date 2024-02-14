import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders app with language selector', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const languageSelector = screen.getByRole('combobox', { name: /select language/i });
  expect(languageSelector).toBeInTheDocument();
});