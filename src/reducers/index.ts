// Redux
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

export * from './types';

// Import here your new created reducers
import { counter } from './counter';
import { user } from './user';
import { notification } from './notification';

export default combineReducers({
  counter,
  user,
  notification,
  i18n: i18nReducer
});
