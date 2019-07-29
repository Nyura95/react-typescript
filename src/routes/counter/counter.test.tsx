import * as React from 'react';
import Counter from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../../store';
import { Router, Route, Switch } from 'react-router';
import { render, fireEvent } from '@testing-library/react';

const Component = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Counter} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

describe('Test Counter route', () => {
  const { unmount, container, getByTestId } = render(<Component />);
  it('Check rendering', () => {
    expect(container).not.toBeNull();
  });
  it('Trigger the reset action', () => {
    const input = getByTestId('reset');
    expect(input).not.toBeNull();

    fireEvent.click(input);

    const counter = getByTestId('counter');
    expect(counter ? counter.innerHTML : null).toBe('0');
  });

  it('Trigger increment counter', () => {
    const input = getByTestId('increment');
    expect(input).not.toBeNull();

    fireEvent.click(input);

    const counter = getByTestId('counter');
    expect(counter ? counter.innerHTML : null).toBe('1');
  });

  it('Trigger decrease counter', () => {
    const input = getByTestId('decrease');
    expect(input).not.toBeNull();

    fireEvent.click(input);

    const counter = getByTestId('counter');
    expect(counter ? counter.innerHTML : null).toBe('0');
  });

  afterAll(() => {
    unmount();
  });
});
