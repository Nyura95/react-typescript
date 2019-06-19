// Redux module
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, Persistor, PersistConfig } from 'redux-persist';
import { createLogger } from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

// (Inter)action
import { i18nGetTranslate } from '../actions/i18n';

// I18n
import { loadTranslations, setLocale, syncTranslationWithStore, TranslationObjects, I18n } from 'react-redux-i18n';
import translations from '../translations';

// Router
import { createBrowserHistory } from 'history';

// reducers / action
import reducers, { IReduxState } from '../reducers';
import { IAction } from '../actions';
import { watchIncrementCounter } from '../sagas/counter';

// config
import { config } from '../config';

// logger
import logger from '../logger';
import { put } from 'redux-saga/effects';

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
    config.production ? applyMiddleware() : applyMiddleware(createLogger({ duration: true })),
    applyMiddleware(routerMiddleware(history))
  )
);

sagaMiddleware.run(watchIncrementCounter);

syncTranslationWithStore(store);
/*
  export default function* i18nFlowSaga() {
    yield put({ type: '@@i18n/LOAD_TRANSLATIONS', translations: translations });
    yield put({ type: '@@i18n/SET_LOCALE', locale: i18nGetTranslate() });
  }
  sagaMiddleware.run(i18nFlowSaga);
*/

// create the persistor
export const persistor: Persistor = persistStore(store, undefined, () => {
  logger.info(`store initialized`, source);
  // Updating title page dynamically
  document.title = I18n.t('helmet.' + location.pathname);
  history.listen(location => (document.title = I18n.t('helmet.' + location.pathname)));
});
