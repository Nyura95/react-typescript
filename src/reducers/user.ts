import { IAction } from '../actions';
import { IUserTypeSaga } from '../sagas/user';

export type IUserType = 'SET_USER' | 'RESET_USER' | IUserTypeSaga;

export type IUserState = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

export type IUserAction<SAGA = {}> = IAction<IUserState, IUserType, SAGA>;

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
      return action.payload ? action.payload : state;
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
  '';
}
