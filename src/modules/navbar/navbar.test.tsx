import * as React from 'react';
import Navbar from '.';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store';
import { render } from '@testing-library/react';

const Component = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
      </PersistGate>
    </Provider>
  );
};

describe('Test navbar module', () => {
  const { unmount, container } = render(<Component />);
  it('Check rendering', () => {
    expect(container).not.toBeNull();
  });

  afterAll(() => {
    unmount();
  });
});
