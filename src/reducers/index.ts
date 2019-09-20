// Redux
import { combineReducers } from 'redux';

export * from './types';

// Import here your new reducers
import { counter } from './counter';
import { user } from './user';
import { notification } from './notification';
import { loadscreen } from './loadscreen';
import { i18nReducer } from './i18n';
import { connectRouter } from './router';
import { loadingBarReducer } from './loadingBar';
import { History } from 'history';

export * from './counter';
export * from './user';
export * from './notification';
export * from './loadscreen';
export * from './loadingBar';
export * from './i18n';
export * from './router';

const reducers = (history: History) =>
  combineReducers({
    counter,
    user,
    notification,
    loadscreen,
    i18n: i18nReducer,
    loadingBar: loadingBarReducer,
    router: connectRouter(history)
  });

export default reducers;
