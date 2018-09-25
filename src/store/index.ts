// redux
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import reduxPersistTransformCompress from 'redux-persist-transform-compress';

// Inter action
import { IAction } from '../actions/Constants';

// i18n
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translations from '../translations';

// router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// reducers
import reducers, { ReduxState } from '../reducers';

// compress your store
const compressor = reduxPersistTransformCompress();

// Config persist store
const persistConfig = {
  key: 'store',
  // tslint:disable-next-line:object-shorthand-properties-first
  storage,
  whitelist: ['Counter'], // Add name reducer for active the persist
  transforms: [compressor]
};

// get the persist reducer from reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// create web history
export const history = createBrowserHistory();

// create the store
export const store = createStore(
  // connect the router and add the persist reducers
  connectRouter(history)(persistedReducer),
  // thunk for dispatch async and load the history
  compose(applyMiddleware(reduxThunk as ThunkMiddleware<ReduxState, IAction<any, any>>, routerMiddleware(history)))
);

// create the persistor
export const persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
// set your default lang (must pass on localstorage user)
store.dispatch(setLocale('en'));
