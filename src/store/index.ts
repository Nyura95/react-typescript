// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import { createLogger } from 'redux-logger';

// (Inter)action
import { getTranslate } from '../actions/i18n';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore, TranslationObjects } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Reducers / action
import reducers, { IReduxState } from '../reducers';
import { IAction } from '../actions';

// Config
import { config } from '../config';

// logger
import logger from '../logger';

logger.info(`initialization store`);

// Config persist store
const persistConfig: PersistConfig = {
  storage,
  key: 'store',
  whitelist: ['Counter', 'User'] // Add the name of reducer for active the persist
  // transforms: config.production ? [] : []
};

// Create web history
export const history = createBrowserHistory();

// Get the persist reducer from reducer
const persistedReducer = persistReducer(persistConfig, reducers(history));

// Config redux-logger
const reduxLogger = createLogger({ duration: true });

// Create the store
export const store = createStore(
  // Connect the router and add the persist reducers
  connectRouter(history)(persistedReducer),
  // Thunk for dispatch async and load the history
  compose(
    applyMiddleware(reduxThunk as ThunkMiddleware<IReduxState, IAction<unknown, unknown>>, routerMiddleware(history)),
    config.production ? applyMiddleware() : applyMiddleware(reduxLogger)
  )
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations as TranslationObjects));
store.dispatch(setLocale(getTranslate()));

// Create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`);
});
