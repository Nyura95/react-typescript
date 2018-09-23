import * as React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { history, store, persistor } from './store';

// router
import { ConnectedRouter } from 'connected-react-router';

import App from './Layout';

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}

render(<Application />, document.getElementById('main'));
