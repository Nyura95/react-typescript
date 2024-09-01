import React from 'react';
import { Provider } from 'react-redux';

import '../i18n';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default App;
