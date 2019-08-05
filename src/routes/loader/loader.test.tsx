import * as React from 'react';
import Loader from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../../store';
import { Router, Route, Switch } from 'react-router';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import LoadingBar from 'react-redux-loading-bar';
import { LoadScreen } from '../../modules';

const Component = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoadingBar style={{ zIndex: 1 }} />
        <LoadScreen />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Loader} />
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
  it('Trigger the loader bar action', done => {
    const showLoader = getByTestId('showLoader');
    expect(showLoader).not.toBeNull();

    const hideLoader = getByTestId('hideLoader');
    expect(hideLoader).not.toBeNull();

    fireEvent.click(showLoader);

    waitForDomChange({ container }).then(() => {
      fireEvent.click(hideLoader);
      waitForDomChange({ container }).then(() => {
        done();
      });
    });
  });
  it('Trigger the loaderScreen action', done => {
    const startLoadingScreen = getByTestId('startLoadingScreen');
    expect(startLoadingScreen).not.toBeNull();

    waitForDomChange({ container }).then(() => {
      const loadingScreen = getByTestId('loadingScreen');
      expect(loadingScreen).not.toBeNull();

      expect(loadingScreen.className.indexOf('animated')).not.toBe(-1);
      done();
    });

    fireEvent.click(startLoadingScreen);
  });

  afterAll(() => {
    unmount();
  });
});
