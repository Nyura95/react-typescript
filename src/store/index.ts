// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig, Transform } from 'redux-persist';
import reduxPersistTransformCompress from 'redux-persist-transform-compress';

// (Inter)action
import { IAction } from '../actions/types';
import { getTranslate } from '../actions/i18n';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore, TranslationObjects } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Reducers
import reducers, { IReduxState } from '../reducers';

// Config
import { config } from '../config';

// Compress the store
const compressor: Transform<null, null> = reduxPersistTransformCompress();

// Config persist store
const persistConfig: PersistConfig = {
  storage,
  key: 'store',
  whitelist: ['Counter', 'User'], // Add the name of reducer for active the persist
  transforms: config.production ? [compressor] : []
};

// Get the persist reducer from reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create web history
export const history = createBrowserHistory();

// Create the store
export const store = createStore(
  // Connect the router and add the persist reducers
  connectRouter(history)(persistedReducer),
  // Thunk for dispatch async and load the history
  compose(applyMiddleware(reduxThunk as ThunkMiddleware<IReduxState, IAction<any, any>>, routerMiddleware(history)))
);

// Create the persistor
export const persistor: Persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations as TranslationObjects));
// Set your default lang (must pass on localstorage user)
store.dispatch(setLocale(getTranslate()));
