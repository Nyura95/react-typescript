// state reducer
import { CounterState } from '../reducers';

// Constants
import { ADD_COUNTER, SET_COUNTER, Action, Dispatch } from './';

// Action increment the counter
export const setCounter = (counter: number): Action<CounterState> => (dispatch: Dispatch<CounterState>) =>
  dispatch({
    type: ADD_COUNTER,
    payload: {
      counter,
    },
  });

// Action for reset the counter from 0
export const resetCounter = (): Action<CounterState> => (dispatch: Dispatch<CounterState>) =>
  dispatch({
    type: SET_COUNTER,
    payload: {
      counter: 0,
    },
  });

// Action decrement the counter
export const AsyncSetCounter = (counter: number): Action<CounterState> => (dispatch: Dispatch<CounterState>) => {
  // Simulate the api
  setTimeout(() => {
    // Dispatch in async
    dispatch({
      type: ADD_COUNTER,
      payload: {
        counter: counter,
      },
    });
  }, 500);
};
