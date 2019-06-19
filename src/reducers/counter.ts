import { IAction } from '../actions';
import { ICounterTypeSaga } from '../sagas/counter';

export type ICounterType = 'ADD_COUNTER' | 'SET_COUNTER' | ICounterTypeSaga;

export type ICounterState = {
  counter: number;
};

export type ICounterAction = IAction<ICounterState, ICounterType>;

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
export function counter(state = initialState, action: ICounterAction): ICounterState {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        counter: action.payload ? state.counter + action.payload.counter : state.counter + 0
      };
    case 'SET_COUNTER':
      return {
        counter: action.payload ? action.payload.counter : state.counter
      };
    default:
      return state;
  }
}
