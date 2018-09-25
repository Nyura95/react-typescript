// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reduxPersistTransformCompress from 'redux-persist-transform-compress';

// (Inter)action
import { IAction } from '../actions/Constants';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Reducers
import reducers, { ReduxState } from '../reducers';

// Compress the store
const compressor = reduxPersistTransformCompress();

// Config persist store
const persistConfig = {
  key: 'store',
  // tslint:disable-next-line:object-shorthand-properties-first
  storage,
  whitelist: ['Counter'], // Add name reducer for active the persist
  transforms: [compressor]
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
  compose(applyMiddleware(reduxThunk as ThunkMiddleware<ReduxState, IAction<any, any>>, routerMiddleware(history)))
);

// Create the persistor
export const persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
// Set your default lang (must pass on localstorage user)
store.dispatch(setLocale('en'));
