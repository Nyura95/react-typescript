import * as React from 'react';
import { render } from 'react-dom';

// modules
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// store
import { store, persistor } from './store';

// component
import Layout from './routes/layout';

const Application: IHook = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
}

Application.defaultProps = {};

render(<Application />, document.getElementById('main'));
