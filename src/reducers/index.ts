// redux
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

// import all reducers
import Counter, { State as counterState } from './Counter';

// interface redux
export interface ReduxState {
  Counter: counterState;
}

// export all reducers combine
export default combineReducers({
  Counter,
  i18n: i18nReducer,
});
