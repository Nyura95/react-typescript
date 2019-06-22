// Redux
import { combineReducers } from 'redux';

export * from './types';

// Import here your new reducers
import { counter } from './counter';
import { user } from './user';
import { notification } from './notification';
import { loadscreen } from './loadscreen';
import { i18nReducer } from './i18n';
import { routerReducer } from './router';
import { loadingBarReducer } from './loadingBar';

export * from './counter';
export * from './user';
export * from './notification';
export * from './loadscreen';
export * from './loadingBar';
export * from './i18n';
export * from './router';

export default combineReducers({
  counter,
  user,
  notification,
  loadscreen,
  i18n: i18nReducer,
  loadingBar: loadingBarReducer,
  routing: routerReducer
});
