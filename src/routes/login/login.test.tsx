import * as React from 'react';
import Login from '.';

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
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

describe('Test login route', () => {
  const { unmount, container, getByTestId } = render(<Component />);
  it('Check rendering', () => {
    expect(container).not.toBeNull();
  });

  it('Check if input username working', () => {
    const username = 'example@exemple.com';
    const input = getByTestId('username') as HTMLInputElement;
    expect(input).not.toBeNull();

    fireEvent.change(input, {
      target: { value: username }
    });

    expect(input.value).toBe(username);
  });

  it('Check if input password working', () => {
    const password = 'hardPassword';
    const input = getByTestId('password') as HTMLInputElement;
    expect(input).not.toBeNull();

    fireEvent.change(input, {
      target: { value: password }
    });

    expect(input.value).toBe(password);
  });

  afterAll(() => {
    unmount();
  });
});
