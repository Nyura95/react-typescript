// typing
import { Dispatch } from 'redux';

// state reducer
import { State as StateCounter } from '../reducers/Counter';

// Constants
import { ADD_COUNTER, SET_COUNTER, Action } from './';

// Action increment the counter
export const setCounter = (counter: number) => (dispatch: Dispatch<Action<StateCounter>>) =>
  dispatch({
    type: ADD_COUNTER,
    payload: {
      counter,
    },
  });

// Action for reset the counter from 0
export const resetCounter = () => (dispatch: Dispatch<Action<StateCounter>>) =>
  dispatch({
    type: SET_COUNTER,
    payload: {
      counter: 0,
    },
  });

// Action decrement the counter
export const AsyncSetCounter = (counter: number) => (dispatch: Dispatch<Action<StateCounter>>) => {
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
