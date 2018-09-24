// redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createCompressor from 'redux-persist-transform-compress';

import { IAction } from '../actions/constants';

// i18n
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translations from '../translations';

// router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

// reducers
import reducers, { ReduxState } from '../reducers';

// compress your store
const compressor = createCompressor();

// Config persist store
const persistConfig = {
  key: 'store',
  storage,
  whitelist: ['Counter'], // Add name reducer for active the persist
  transforms: [compressor],
};

// get the persist reducer from reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// create web history
export const history = createHistory();

// create the store
export const store = createStore(
  // connect the router and add the persist reducers
  connectRouter(history)(persistedReducer),
  // thunk for dispatch async and load the history
  compose(applyMiddleware(thunk as ThunkMiddleware<ReduxState, IAction<any>>, routerMiddleware(history)))
);

// create the persistor
export const persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
// set your default lang (must pass on localstorage user)
store.dispatch(setLocale('en'));
