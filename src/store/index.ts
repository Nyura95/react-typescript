// Redux module
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import { createLogger } from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

// I18n
import { syncTranslationWithStore, I18n } from 'react-redux-i18n';

// Router
import { createBrowserHistory } from 'history';

// reducers / action
import reducers from '../reducers';
import { IAction } from '../actions';
import rootSaga from '../sagas';

// config
import { config } from '../config';

// logger
import logger from '../logger';

const source = 'store';
logger.info(`initialization store`, source);

// config persist store
const persistConfig: PersistConfig = {
  storage,
  key: 'store',
  whitelist: ['counter', 'user'], // Add the name of the reducer for active the persist state
  version: 1
};

// create web history
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware<IAction<unknown, unknown>>();

// create the store
export const store = createStore(
  // connect the router and add the persist reducers
  persistReducer(persistConfig, reducers),
  undefined,
  // thunk for dispatch async and load the history
  compose(
    applyMiddleware(sagaMiddleware),
    config.reduxLog ? applyMiddleware(createLogger({ duration: true })) : applyMiddleware(),
    applyMiddleware(routerMiddleware(history))
  )
);

syncTranslationWithStore(store);
sagaMiddleware.run(rootSaga);

// create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`, source);
  // Updating title page dynamically
  document.title = I18n.t('helmet.' + location.pathname);
  history.listen(location => (document.title = I18n.t('helmet.' + location.pathname)));
});
