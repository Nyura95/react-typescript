import { SET_COUNTER, RESET_COUNTER, Action } from '../actions/Constants';

export type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: Action<State>) {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.counter,
      };
    case RESET_COUNTER:
      return {
        counter: 0,
      };
    default:
      return state;
  }
}
