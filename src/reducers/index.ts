// Redux
import { combineReducers } from 'redux';
import { i18nReducer, I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';

// Import all reducers
import Counter, { IState as CounterState } from './counter';
import User, { IState as UserState } from './user';

// Interface redux app
export interface IReduxState {
  Counter: CounterState;
  User: UserState;
  i18n: I18nState;
  Route: RouterState;
}

// Export all reducers combine
export default combineReducers({
  Counter,
  User,
  i18n: i18nReducer
});
