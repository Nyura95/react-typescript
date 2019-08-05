import * as React from 'react';
import Comp from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../../store';
import { Router, Route, Switch } from 'react-router';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';

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
  it('Check rendering', () => {
    const { unmount, container } = render(<Component />);
    expect(container).not.toBeNull();
    unmount();
  });
  it('check if click button1 working', done => {
    const { unmount, container, getByTestId } = render(<Component />);

    const input = getByTestId('button1');
    expect(input).not.toBeNull();

    waitForDomChange({ container }).then(() => {
      unmount();
      done();
    });

    fireEvent.click(input);
  });
  it('check if click button2 working', done => {
    const { unmount, container, getByTestId } = render(<Component />);

    const input = getByTestId('button2');
    expect(input).not.toBeNull();

    waitForDomChange({ container }).then(() => {
      unmount();
      done();
    });

    fireEvent.click(input);
  });
});
