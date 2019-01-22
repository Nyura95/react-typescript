// Import action app
import { IAction } from '../actions';

// Declare type action
export type IType = 'SET_USER';

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
export function User(state: IState = initialState, action: IAction<IType, IState>): IState {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
}
