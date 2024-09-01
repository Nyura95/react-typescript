import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../app/App';
import HomePage from './HomePage';

test('check if title is here', () => {
  render(
    <App>
      <HomePage />
    </App>
  );
  const linkElement = screen.getByText(/react-typescript/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if i18n work', () => {
  render(
    <App>
      <HomePage />
    </App>
  );

  const buttonElement = screen.getByTestId('i18n-switch');
  const currentLanguage = buttonElement.getAttribute('data-language');
  fireEvent.click(buttonElement);
  expect(buttonElement.getAttribute('data-language') !== currentLanguage).toBe(false);
});

test('check if counter work', () => {
  render(
    <App>
      <HomePage />
    </App>
  );

  const buttonIncrementElement = screen.getByTestId('counter-increment');
  fireEvent.click(buttonIncrementElement);
  expect(Number(buttonIncrementElement.getAttribute('data-counter'))).toBe(1);

  const buttonResetElement = screen.getByTestId('counter-reset');
  fireEvent.click(buttonResetElement);
  expect(Number(buttonIncrementElement.getAttribute('data-counter'))).toBe(0);
});
