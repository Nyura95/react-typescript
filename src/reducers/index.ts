// Redux
import { combineReducers } from 'redux';
import { i18nReducer, I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';

// Import all reducers
import Counter, { State as CounterState } from './counter';

// Interface redux app
export interface IReduxState {
  Counter: CounterState;
  i18n: I18nState;
  Route: RouterState;
}

// Export all reducers combine
export default combineReducers({
  Counter,
  i18n: i18nReducer
});
