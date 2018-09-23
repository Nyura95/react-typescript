import { SET_COUNTER, RESET_COUNTER, Action } from './';
import { Dispatch } from 'redux';
import { State as StateCounter } from '../reducers/Counter';

// Action increment the counter
export const setCounter = (counter: number) => ({
  type: SET_COUNTER,
  payload: {
    counter,
  },
});

// Action for reset the counter from 0
export const resetCounter = () => ({
  type: RESET_COUNTER,
});

// Action decrement the counter
export const AsyncSetCounter = (counter: number) => (dispatch: Dispatch<Action<StateCounter>>) => {
  // simulate the api
  setTimeout(() => {
    // dispatch in async
    dispatch({
      type: SET_COUNTER,
      payload: {
        counter: counter,
      },
    });
  }, 1000);
};
