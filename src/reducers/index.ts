// Redux
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { loadingBarReducer } from 'react-redux-loading-bar'

export * from './types';

// Import here your new created reducers
import { counter } from './counter';
import { user } from './user';
import { notification } from './notification';
import { loadscreen } from './loadscreen';

export default combineReducers({
  counter,
  user,
  notification,
  loadscreen,
  i18n: i18nReducer,
  loadingBar: loadingBarReducer,
});
