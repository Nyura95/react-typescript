// React
import * as React from 'react';
import { render } from 'react-dom';

// Store
import { history, store, persistor } from './store';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Router
import { ConnectedRouter } from 'connected-react-router';

// Component
import Layout from './Layout';

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Layout />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

render(<Application />, document.getElementById('main'));
