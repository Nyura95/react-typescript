import { ADD_COUNTER, SET_COUNTER, IAction } from '../actions/Constants';

export type State = {
  counter: number;
};

export type Action = {
  type: 'ADD_COUNTER' | 'SET_COUNTER';
  payload: State;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: IAction<State>): State {
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
