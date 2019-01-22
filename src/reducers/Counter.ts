import { IAction } from '../actions';
import logger from '../logger';

export type IType = 'ADD_COUNTER' | 'SET_COUNTER';

export type IState = {
  counter: number;
};

const initialState: IState = {
  counter: 0
};

export function Counter(state: IState = initialState, action: IAction<IState, IType>): IState {
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
