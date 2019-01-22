// Import action app
import { IAction } from '../actions';

// Declare type action
export type IType = 'ADD_COUNTER' | 'SET_COUNTER';

// Declare state reducer
export type IState = {
  counter: number;
};

// Initial
const initialState: IState = {
  counter: 0
};

// Reducer
export function Counter(state: IState = initialState, action: IAction<IType, IState>): IState {
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
