import { IAction, ICustomDispatch, ICustomAction } from '../actions';

export type IUserType = 'SET_USER' | 'RESET_USER';

export type IUserState = {
  username: string;
  first_name: string;
  last_name: string;
  token: string;
};

// user reducer
export type IUserDispatch<S = IUserState, T = IUserType> = ICustomDispatch<S, T>;
export type IUserAction<S = IUserState, T = IUserType> = ICustomAction<S, T>;

const initialState: IUserState = {
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
export function user(state = initialState, action: IAction<IUserState, IUserType>): IUserState {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
}
