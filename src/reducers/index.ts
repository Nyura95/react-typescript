// Redux
import { combineReducers } from 'redux';

export * from './types';

// Import here your new reducers
import { counter } from './counter';
import { user } from './user';
import { notification } from './notification';
import { loadscreen } from './loadscreen';
import { connectRouter } from './router';
import { loadingBarReducer } from './loadingBar';
import { History } from 'history';

export * from './counter';
export * from './user';
export * from './notification';
export * from './loadscreen';
export * from './loadingBar';
export * from './router';

const reducers = (history: History) =>
  combineReducers({
    counter,
    user,
    notification,
    loadscreen,
    loadingBar: loadingBarReducer,
    router: connectRouter(history)
  });

export default reducers;
