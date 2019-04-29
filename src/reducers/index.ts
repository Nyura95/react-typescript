// Redux
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { connectRouter } from 'connected-react-router';

export * from './types';

// Import here your new created reducers
import { Counter } from './counter';
import { User } from './user';
import { Notification } from './notification';

export default combineReducers({
  Counter,
  User,
  Notification,
  i18n: i18nReducer
});
