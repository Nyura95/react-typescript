import { ICounterAction, ICounterDispatch } from './types';
import logger from '../loggeur';

const source = 'Counter action';

// Action set the counter
export const setCounter = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  logger.info('Add counter', source);
  dispatch({
    type: 'ADD_COUNTER',
    payload: {
      counter
    }
  });
};

// Action for reset the counter from 0
export const resetCounter = (): ICounterAction => (dispatch: ICounterDispatch) =>
  dispatch({
    type: 'SET_COUNTER',
    payload: {
      counter: 0
    }
  });

// Action set in async the counter
export const AsyncSetCounter = (counter: number): ICounterAction => (dispatch: ICounterDispatch) => {
  // Simulate the api
  setTimeout(() => {
    // Dispatch in async
    dispatch({
      type: 'ADD_COUNTER',
      payload: {
        counter
      }
    });
  }, 500);
};
