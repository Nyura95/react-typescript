// Redux
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import { connectRouter} from 'connected-react-router'

export * from './types';

// Import here your new created reducers
import { Counter } from './counter';
import { User } from './user';
import { History } from 'history';

// Export all reducers combine
const reducers = (history: History) => combineReducers({
  Counter,
  User,
  router: connectRouter(history) as any,
  i18n: i18nReducer
});

export default reducers;
