import { combineReducers } from 'redux';

import Counter, { State as counterState } from './Counter';

export interface ReduxState {
  Counter: counterState;
}

export default combineReducers({
  Counter,
});
