// Redux module
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import i18n from 'i18next';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import { createLogger } from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

// i18n
import '../translations';

// Router
import { createBrowserHistory } from 'history';

// reducers / action
import reducers, { IReduxState } from '../reducers';
import rootSaga from '../sagas';

// config
import { config } from '../config';

// logger
import logger from '../logger';

const source = 'store';
logger.info(`initialization store`, source);

// config persist store
const persistConfig: PersistConfig<IReduxState> = {
  storage,
  key: 'store',
  whitelist: ['counter', 'user'], // Add the name of the reducer for active the persist state
  version: 1
};

// create web history
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// create the store
export const store = createStore(
  // connect the router and add the persist reducers
  persistReducer<IReduxState>(persistConfig, reducers(history)),
  undefined,
  // thunk for dispatch async and load the history
  compose(
    applyMiddleware(sagaMiddleware),
    config.reduxLog ? applyMiddleware(createLogger({ duration: true })) : applyMiddleware(),
    applyMiddleware(routerMiddleware(history))
  )
);

sagaMiddleware.run(rootSaga);

// create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`, source);
  // Updating title page dynamically
  document.title = i18n.t('helmet.' + location.pathname);
  history.listen(location => (document.title = i18n.t('helmet.' + location.pathname)));
});
