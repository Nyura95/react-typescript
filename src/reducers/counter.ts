import { ICustomAction, ICustomDispatch, IAction } from '../actions';

export type ICounterType = 'ADD_COUNTER' | 'SET_COUNTER';

export type ICounterState = {
  counter: number;
};

export type ICounterDispatch<S = ICounterState, T = ICounterType> = ICustomDispatch<S, T>;
export type ICounterAction<S = ICounterState, T = ICounterType> = ICustomAction<S, T>;

const initialState: ICounterState = {
  counter: 0
};

/**
 * Store a counter
 * @param state ICounterState
 * @param action IAction<ICounterState, IType>
 * @version 1.0.0
 * @returns ICounterState
 */
export function counter(state = initialState, action: IAction<ICounterState, ICounterType>): ICounterState {
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
