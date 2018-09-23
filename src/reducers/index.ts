// redux
import { combineReducers } from 'redux';

// import all reducers
import Counter, { State as counterState } from './Counter';

// interface redux
export interface ReduxState {
  Counter: counterState;
}

// export all reducers combine
export default combineReducers({
  Counter,
});
