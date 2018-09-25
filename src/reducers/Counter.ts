// Import action app
import { IAction } from '../actions/Constants';

// declare type action
export type Type = 'ADD_COUNTER' | 'SET_COUNTER';

// declare state reducer
export type State = {
  counter: number;
};

// initial
const initialState: State = {
  counter: 0,
};

// reducer
export default function counter(state: State = initialState, action: IAction<Type, State>): State {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload.counter,
      };
    case 'SET_COUNTER':
      return {
        counter: action.payload.counter,
      };
    default:
      return state;
  }
}
