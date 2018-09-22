import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history, store, persistor } from './store';

import Home from './routes/home/container';
import Layout from './layout/component';

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
