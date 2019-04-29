import { IAction } from '../actions';

export type IType = 'ADD_COUNTER' | 'SET_COUNTER';

export type IState = {
  counter: number;
};

const initialState: IState = {
  counter: 0
};

/**
 * Store a counter
 * @param state IState
 * @param action IAction<IState, IType>
 * @version 1.0.0
 * @returns IState
 */
export function counter(state: IState = initialState, action: IAction<IState, IType>): IState {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
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
