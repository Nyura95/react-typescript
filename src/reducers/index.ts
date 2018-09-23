// redux
import { combineReducers } from 'redux';
import { i18nReducer, I18nState } from 'react-redux-i18n';

// import all reducers
import Counter, { State as counterState } from './Counter';

// interface redux
export interface ReduxState {
  Counter: counterState;
  i18n: I18nState;
}

// export all reducers combine
export default combineReducers({
  Counter,
  i18n: i18nReducer,
});
