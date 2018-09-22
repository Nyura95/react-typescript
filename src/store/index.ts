// redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import createEncryptor from 'redux-persist-transform-encrypt';

import createHistory from 'history/createBrowserHistory';

import reducers from '../reducers';

const encryptor = createEncryptor({ secretKey: 'ds43dx4' });

const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['Counter'],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const history = createHistory();

export const store = createStore(
  connectRouter(history)(persistedReducer),
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
