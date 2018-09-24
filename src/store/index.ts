// redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createCompressor from 'redux-persist-transform-compress';

// i18n
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translations from '../translations';

// router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

// reducers
import reducers from '../reducers';

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
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

// create the persistor
export const persistor = persistStore(store);

const dispatch: any = store.dispatch;

syncTranslationWithStore(store);
dispatch(loadTranslations(translations));
// set your default lang (must pass on localstorage user)
dispatch(setLocale('en'));
