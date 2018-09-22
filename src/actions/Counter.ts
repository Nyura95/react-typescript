import { COUNTER, IAction } from './constants';
import { Dispatch } from 'redux';
import { State as StateCounter } from '../reducers/Counter';

export const increment = () => (dispatch: Dispatch<IAction<StateCounter>>) => {
  dispatch({
    type: COUNTER,
    payload: {
      counter: 1,
    },
  });
};
