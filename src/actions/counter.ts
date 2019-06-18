import logger from '../logger';
import { put, delay } from 'redux-saga/effects';

// Set the source file
const source = 'Counter action';

/**
 * Increment the counter with the variable {counter}
 * @param {number} counter
 * @version 1.0.0
 * @returns {void}
 */
export const counterSet = function*(action) {
  logger.info('Set counter', source);
  yield put({
    type: 'ADD_COUNTER',
    payload: {
      counter: action.counter
    }
  });
};

/**
 * Reset the counter at 0
 * @version 1.0.0
 * @returns {void}
 */
export const counterReset = function*() {
  logger.info('Reset counter', source);
  yield put({
    type: 'SET_COUNTER',
    payload: {
      counter: 0
    }
  });
};

/**
 * Increment the counter with the variable {counter} in asynchronous
 * @param {number} counter
 * @version 1.0.0
 * @returns {void}
 */
export const counterAsyncSet = function*(counter: number) {
  logger.info('Async set counter', source);
  yield delay(500);
  yield put({ type: 'ADD_COUNTER', payload: { counter } });
};
