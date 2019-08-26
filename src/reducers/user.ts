import { IAction } from '../actions';
import { IUserTypeSaga, IUserStateSage } from '../sagas/user';
import { Dispatch } from 'redux';

export type UserType = 'SET_USER' | 'RESET_USER' | IUserTypeSaga;

export interface IUserState {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
}

export type UserAction = IAction<IUserState, UserType, IUserStateSage>;
export type UserDispatch = Dispatch<UserAction>;

const initialState: IUserState = {
  username: '',
  first_name: '',
  last_name: '',
  token: ''
};

/**
 * Store the user info
 * @param {IUserState} state
 * @param {UserAction} action
 * @version 1.0.0
 * @returns IUserState
 */
export function user(state = initialState, action: UserAction): IUserState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      };
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
  '';
}
