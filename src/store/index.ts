// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig, Transform } from 'redux-persist';
import reduxPersistTransformCompress from 'redux-persist-transform-compress';

// (Inter)action
import { getTranslate } from '../actions/i18n';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore, TranslationObjects } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Reducers
import reducers from '../reducers';
import { IAction } from '../actions';
import { IReduxState } from '../reducers';

// Config
import { config } from '../config';
import logger from '../logger';

logger.info(`initialization store`);

// Compress the store
const compressor: Transform<null, null> = reduxPersistTransformCompress();

// Config persist store
const persistConfig: PersistConfig = {
  storage,
  key: 'store',
  whitelist: ['Counter', 'User'], // Add the name of reducer for active the persist
  transforms: config.production ? [compressor] : []
};

// Create web history
export const history = createBrowserHistory();

// Get the persist reducer from reducer
const persistedReducer = persistReducer(persistConfig, reducers(history));

// Create the store
export const store = createStore(
  // Connect the router and add the persist reducers
  connectRouter(history)(persistedReducer),
  // Thunk for dispatch async and load the history
  compose(
    applyMiddleware(reduxThunk as ThunkMiddleware<IReduxState, IAction<unknown, unknown>>, routerMiddleware(history))
  )
);

// Create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`);
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations as TranslationObjects));
console.log(getTranslate());
store.dispatch(setLocale(getTranslate()));
