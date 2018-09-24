import { ADD_COUNTER, SET_COUNTER, Action } from '../actions/Constants';

export type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: Action<State>): State {
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
