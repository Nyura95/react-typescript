// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import { createLogger } from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

// (Inter)action
import { i18nGetTranslate } from '../actions/i18n';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore, TranslationObjects } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { createBrowserHistory } from 'history';

// reducers / action
import reducers, { IReduxState } from '../reducers';
import { IAction } from '../actions';

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

// create the store
export const store = createStore(
  // connect the router and add the persist reducers
  persistReducer(persistConfig, reducers),
  undefined,
  // thunk for dispatch async and load the history
  compose(
    applyMiddleware(reduxThunk as ThunkMiddleware<IReduxState, IAction<unknown, unknown>>),
    config.production ? applyMiddleware() : applyMiddleware(createLogger({ duration: true })),
    applyMiddleware(routerMiddleware(history))
  )
);

// create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`, source);
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations as TranslationObjects));
store.dispatch(setLocale(i18nGetTranslate()));
