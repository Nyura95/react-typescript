import * as React from 'react';
import { render } from 'react-dom';

// modules
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// store
import { store, persistor } from './store';

// component
import Layout from './routes/layout';

const Application: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
}

render(<Application />, document.getElementById('main'));
