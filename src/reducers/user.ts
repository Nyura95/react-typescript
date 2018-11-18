// Import action app
import { IAction } from '../actions/types';

// Declare type action
export type Type = 'SET_USER';

// Declare state reducer
export type IState = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

// Initial
const initialState: IState = {
  username: '',
  first_name: '',
  last_name: '',
  token: ''
};

// Reducer
export default function counter(state: IState = initialState, action: IAction<Type, IState>): IState {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
}
