import { COUNTER } from '../actions/constants';
import { IAction } from '../actions/constants';

export type State = {
  counter: number;
};

const initialState: State = {
  counter: 0,
};

export default function counter(state: State = initialState, action: IAction<State>) {
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
