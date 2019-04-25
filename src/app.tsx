// React
import * as React from 'react';
import { render } from 'react-dom';

// Store
import { store, persistor } from './store';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Component
import Layout from './routes/layout';

class Application extends React.Component {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout />
        </PersistGate>
      </Provider>
    );
  }
}

render(<Application />, document.getElementById('main'));
