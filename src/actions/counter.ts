import { ICounterAction, ICounterDispatch } from './types';
import logger from '../logger';

// Set the source file
const source = 'Counter action';

/**
 * Increment the counter with the variable {counter}
 * @param {number} counter
 * @version 1.0.0
 * @returns {ICounterAction}
 */
export const counterSet = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.info('Set counter', source);
  return dispatch({
    type: 'ADD_COUNTER',
    payload: {
      counter
    }
  });
};

/**
 * Reset the counter at 0
 * @version 1.0.0
 * @returns {ICounterAction}
 */
export const counterReset = (): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.info('Reset counter', source);
  return dispatch({
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
 * @returns {ICounterAction}
 */
export const counterAsyncSet = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.info('Async set counter', source);
  setTimeout(() => {
    return dispatch({
      type: 'ADD_COUNTER',
      payload: {
        counter
      }
    });
  }, 500);
};