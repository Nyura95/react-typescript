// redux
import { combineReducers } from 'redux';
import { i18nReducer, I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';
// import all reducers
import Counter, { State as CounterState } from './Counter';

// interface redux
export interface ReduxState {
  Counter: CounterState;
  i18n: I18nState;
  Route: RouterState;
}

// export all reducers combine
export default combineReducers({
  Counter,
  i18n: i18nReducer
});
