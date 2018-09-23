import { COUNTER, Action } from '../actions/Constants';

export type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: Action<State>) {
  switch (action.type) {
    case COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.counter,
      };
    default:
      return state;
  }
}
