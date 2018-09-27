// Import action app
import { IAction } from '../actions/Types';

// Declare type action
export type Type = 'ADD_COUNTER' | 'SET_COUNTER';

// Declare state reducer
export type State = {
  counter: number;
};

// Initial
const initialState: State = {
  counter: 0
};

// Reducer
export default function counter(state: State = initialState, action: IAction<Type, State>): State {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.payload.counter
      };
    case 'SET_COUNTER':
      return {
        counter: action.payload.counter
      };
    default:
      return state;
  }
}
