import { ICounterAction, ICounterDispatch } from './types';
import logger from '../loggeur';

// Set the source file
const source = 'Counter action';

/**
 * Increment the counter with the variable {counter}
 * @param counter number
 * @returns ICounterAction
 */
export const setCounter = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.trace('Set counter', source);
  return dispatch({
    type: 'SET_COUNTER',
    payload: {
      counter
    }
  });
};

/**
 * Reset the counter at 0
 * @returns ICounterAction
 */
export const resetCounter = (): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.trace('Reset counter', source);
  return dispatch({
    type: 'SET_COUNTER',
    payload: {
      counter: 0
    }
  });
};

/**
 * Increment the counter with the variable {counter} in asynchronous
 * @param counter number
 * @returns ICounterAction
 */
export const AsyncSetCounter = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.trace('Async set counter', source);
  // Simulate the api
  setTimeout(() => {
    // Dispatch in async
    return dispatch({
      type: 'ADD_COUNTER',
      payload: {
        counter
      }
    });
  }, 500);
};
