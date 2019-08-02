import * as React from 'react';
import Comp from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../../store';
import { Router, Route, Switch } from 'react-router';
import { render } from '@testing-library/react';

const Component = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Comp} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

describe('Test translate route', () => {
  const { unmount, container } = render(<Component />);
  it('Check rendering', () => {
    expect(container).not.toBeNull();
  });

  afterAll(() => {
    unmount();
  });
});
