import * as React from 'react';
import Home from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../../store';
import { Router, Route, Switch } from 'react-router';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import { I18n } from 'react-redux-i18n';

const Component = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

describe('Test Counter route', () => {
  const { unmount, container, getByTestId } = render(<Component />);
  const username = 'test@test.com';
  it('Check rendering', () => {
    expect(container).not.toBeNull();
  });
  it('Trigger the reset action', done => {
    store.dispatch({ type: 'AUTHENTICATE_USER', payload: {}, saga: { username } });
    waitForDomChange({ container }).then(() => {
      const div = getByTestId('username');
      expect(div).toBeDefined();

      expect(div ? div.innerHTML : null).toBe(I18n.t('pages.home.hello', { username }));
      done();
    });
  });

  afterAll(() => {
    unmount();
  });
});
