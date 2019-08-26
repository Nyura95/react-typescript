import { IAction } from '../actions';
import { ICounterTypeSaga } from '../sagas/counter';
import { Dispatch } from 'redux';

export type CounterType = 'ADD_COUNTER' | 'SET_COUNTER' | ICounterTypeSaga;

export interface ICounterState {
  counter: number;
}

export type CounterAction = IAction<ICounterState, CounterType>;
export type CounterDispatch = Dispatch<CounterAction>;

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
export function counter(state = initialState, action: CounterAction): ICounterState {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        counter: state.counter + (action.payload.counter ? action.payload.counter : 0)
      };
    case 'SET_COUNTER':
      return {
        counter: action.payload.counter !== undefined ? action.payload.counter : state.counter
      };
    default:
      return state;
  }
}
