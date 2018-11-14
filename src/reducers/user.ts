// Import action app
import { IAction } from '../actions/types';

// Declare type action
export type Type = 'SET_USER';

// Declare state reducer
export type State = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

// Initial
const initialState: State = {
  username: '',
  first_name: '',
  last_name: '',
  token: ''
};

// Reducer
export default function counter(state: State = initialState, action: IAction<Type, State>): State {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
