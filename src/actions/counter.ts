import { ICounterAction, ICounterDispatch } from './types';
import logger from '../logger';

// Set the source file
const source = 'Counter action';

/**
 * Increment the counter with the variable {counter}
 * @param {number} counter
 * @version 1.0.0
 * @returns {void}
 */
export const counterSet = (counter: number): ICounterAction => (dispatch: ICounterDispatch): void => {
  logger.info('Set counter', source);
  dispatch({
    type: 'ADD_COUNTER',
    payload: {
      counter
    }
  });
};

/**
 * Reset the counter at 0
 * @version 1.0.0
 * @returns {void}
 */
export const counterReset = (): ICounterAction => (dispatch: ICounterDispatch): void => {
  logger.info('Reset counter', source);
  dispatch({
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
export const counterAsyncSet = (counter: number): ICounterAction => (dispatch: ICounterDispatch): void => {
  logger.info('Async set counter', source);
  setTimeout(() => {
    dispatch({
      type: 'ADD_COUNTER',
      payload: {
        counter
      }
    });
  }, 500);
};
