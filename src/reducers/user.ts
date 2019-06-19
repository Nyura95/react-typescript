import { IAction } from '../actions';
import { IUserTypeSaga, IUserStateSage } from '../sagas/user';
import { Dispatch } from 'redux';

export type IUserType = 'SET_USER' | 'RESET_USER' | IUserTypeSaga;

export type IUserState = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

export type IUserAction = IAction<IUserState, IUserType, IUserStateSage>;
export type IUserDispatch = Dispatch<IUserAction>;

const initialState: IUserState = {
  username: '',
  first_name: '',
  last_name: '',
  token: ''
};

/**
 * Store the user info
 * @param state IUserState
 * @param action IAction<IUserState, IType>
 * @version 1.0.0
 * @returns IUserState
 */
export function user(state = initialState, action: IUserAction): IUserState {
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
