import { ADD_COUNTER, SET_COUNTER, IAction } from '../actions/Constants';

export type Type = 'ADD_COUNTER' | 'SET_COUNTER';

export type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: IAction<Type, State>): State {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.counter,
      };
    case SET_COUNTER:
      return {
        counter: action.payload.counter,
      };
    default:
      return state;
  }
}
