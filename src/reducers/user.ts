import { IAction } from '../actions';

export type IType = 'SET_USER' | 'RESET_USER';

export type IState = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

const initialState: IState = {
  username: '',
  first_name: '',
  last_name: '',
  token: ''
};

/**
 * Store the user info
 * @param state IState
 * @param action IAction<IState, IType>
 * @version 1.0.0
 * @returns IState
 */
export function User(state: IState = initialState, action: IAction<IState, IType>): IState {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
}
