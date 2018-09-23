import { COUNTER, Action } from './';
import { Dispatch } from 'redux';
import { State as StateCounter } from '../reducers/Counter';

// Action increment the counter
export const increment = () => ({
  type: COUNTER,
  payload: {
    counter: 1,
  },
});

// Action decrement the counter
export const decrement = () => ({
  type: COUNTER,
  payload: {
    counter: -1,
  },
});

// Action decrement the counter
export const AsyncIncrement = () => (dispatch: Dispatch<Action<StateCounter>>) => {
  // simulate the api
  setTimeout(() => {
    dispatch({
      type: COUNTER,
      payload: {
        counter: 2,
      },
    });
  }, 2000);
};
