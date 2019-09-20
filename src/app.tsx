import * as React from 'react';
import { render } from 'react-dom';

// modules
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

// store
import { store, persistor, history } from './store';

// component
import Layout from './routes/layout';

const Application: IHook = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
};

Application.defaultProps = {};

render(<Application />, document.getElementById('main'));
